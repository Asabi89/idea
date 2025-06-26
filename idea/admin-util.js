// Additional utility functions for admin operations

class AdminUtils {
    static validateProjectData(project) {
        const errors = [];
        
        if (!project.title || project.title.trim().length < 3) {
            errors.push('Title must be at least 3 characters long');
        }
        
        if (!project.description || project.description.trim().length < 10) {
            errors.push('Description must be at least 10 characters long');
        }
        
        if (!project.tech || project.tech.trim().length < 2) {
            errors.push('Technologies field is required');
        }
        
        const validCategories = [
            'Web Development', 'Mobile Development', 'Data Science',
            'Machine Learning', 'Game Development', 'Desktop Applications'
        ];
        
        if (!validCategories.includes(project.category)) {
            errors.push('Invalid category selected');
        }
        
        const validDifficulties = ['Beginner', 'Intermediate', 'Advanced'];
        if (!validDifficulties.includes(project.difficulty)) {
            errors.push('Invalid difficulty level');
        }
        
        return errors;
    }
    
    static sanitizeProjectData(project) {
        return {
            ...project,
            title: this.sanitizeString(project.title),
            description: this.sanitizeString(project.description),
            fullDescription: this.sanitizeString(project.fullDescription || project.description),
            tech: this.sanitizeString(project.tech),
            duration: this.sanitizeString(project.duration)
        };
    }
    
    static sanitizeString(str) {
        if (!str) return '';
        return str.toString()
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<[^>]*>/g, '')
            .trim();
    }
    
    static generateProjectId() {
        const maxId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) : 0;
        return maxId + 1;
    }
    
    static formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    static exportToExcel(data, filename) {
        // Simple CSV export that can be opened in Excel
        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => 
                headers.map(header => {
                    const value = row[header] || '';
                    return `"${value.toString().replace(/"/g, '""')}"`;
                }).join(',')
            )
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
    
    static async importFromAPI(apiUrl, apiKey = null) {
        try {
            const headers = {
                'Content-Type': 'application/json'
            };
            
            if (apiKey) {
                headers['Authorization'] = `Bearer ${apiKey}`;
            }
            
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API import failed:', error);
            throw error;
        }
    }
    
    static generateProjectSlug(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
    
    static calculateProjectScore(project) {
        const analytics = projectAnalytics.analytics[project.id] || {};
        const views = analytics.views || 0;
        const bookmarks = Object.values(enhancedBookmarks.bookmarks)
            .filter(b => b.projectId === project.id).length;
        const reviews = projectReviews.getProjectReviews(project.id);
        const avgRating = reviews.length > 0 
            ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length 
            : 0;
        
        // Weighted score calculation
        const score = (views * 0.3) + (bookmarks * 0.4) + (avgRating * 0.3 * 20);
        return Math.round(score * 100) / 100;
    }
    
    static detectDuplicateProjects(threshold = 0.8) {
        const duplicates = [];
        
        for (let i = 0; i < projects.length; i++) {
            for (let j = i + 1; j < projects.length; j++) {
                const similarity = this.calculateSimilarity(projects[i], projects[j]);
                if (similarity >= threshold) {
                    duplicates.push({
                        project1: projects[i],
                        project2: projects[j],
                        similarity: similarity
                    });
                }
            }
        }
        
        return duplicates;
    }
    
    static calculateSimilarity(project1, project2) {
        const title1 = project1.title.toLowerCase();
        const title2 = project2.title.toLowerCase();
        const desc1 = project1.description.toLowerCase();
        const desc2 = project2.description.toLowerCase();
        
        const titleSim = this.stringSimilarity(title1, title2);
        const descSim = this.stringSimilarity(desc1, desc2);
        const techSim = project1.tech === project2.tech ? 1 : 0;
        const catSim = project1.category === project2.category ? 1 : 0;
        
        return (titleSim * 0.4 + descSim * 0.3 + techSim * 0.2 + catSim * 0.1);
    }
    
    static stringSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        const distance = this.levenshteinDistance(longer, shorter);
        return (longer.length - distance) / longer.length;
    }
    
    static levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }
    
    static generateAnalyticsReport(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        const filteredActivity = projectAnalytics.userActivity.filter(activity => {
            const activityDate = new Date(activity.timestamp);
            return activityDate >= start && activityDate <= end;
        });
        
        const report = {
            period: {
                start: startDate,
                end: endDate,
                days: Math.ceil((end - start) / (1000 * 60 * 60 * 24))
            },
            totalActivities: filteredActivity.length,
            uniqueProjects: [...new Set(filteredActivity.map(a => a.projectId))].length,
            activityTypes: {},
            dailyActivity: {},
            topProjects: {},
            categoryPerformance: {}
        };
        
        // Analyze activity types
        filteredActivity.forEach(activity => {
            report.activityTypes[activity.type] = 
                (report.activityTypes[activity.type] || 0) + 1;
            
            const day = activity.timestamp.split('T')[0];
            report.dailyActivity[day] = (report.dailyActivity[day] || 0) + 1;
            
            report.topProjects[activity.projectId] = 
                (report.topProjects[activity.projectId] || 0) + 1;
        });
        
        // Category performance
        projects.forEach(project => {
            const projectActivity = filteredActivity.filter(a => a.projectId === project.id);
            if (projectActivity.length > 0) {
                report.categoryPerformance[project.category] = 
                    (report.categoryPerformance[project.category] || 0) + projectActivity.length;
            }
        });
        
        return report;
    }
    
    static optimizeProjectData() {
        const optimizations = [];
        
        projects.forEach(project => {
            // Check for missing full descriptions
            if (!project.fullDescription || project.fullDescription === project.description) {
                optimizations.push({
                    type: 'missing_full_description',
                    projectId: project.id,
                    suggestion: 'Add a detailed full description'
                });
            }
            
            // Check for short descriptions
            if (project.description.length < 50) {
                optimizations.push({
                    type: 'short_description',
                    projectId: project.id,
                    suggestion: 'Expand the project description'
                });
            }
            
            // Check for missing duration
            if (!project.duration) {
                optimizations.push({
                    type: 'missing_duration',
                    projectId: project.id,
                    suggestion: 'Add estimated project duration'
                });
            }
            
            // Check for technology relevance
            const currentYear = new Date().getFullYear();
            const outdatedTech = ['jQuery', 'Flash', 'Silverlight', 'Internet Explorer'];
            const hasOutdatedTech = outdatedTech.some(tech => 
                project.tech.toLowerCase().includes(tech.toLowerCase())
            );
            
            if (hasOutdatedTech) {
                optimizations.push({
                    type: 'outdated_technology',
                    projectId: project.id,
                    suggestion: 'Consider updating to modern technologies'
                });
            }
        });
        
        return optimizations;
    }
    
    static createProjectTemplate(category, difficulty) {
        const templates = {
            'Web Development': {
                'Beginner': {
                    tech: 'HTML, CSS, JavaScript',
                    duration: '2-4 hours',
                    description: 'A beginner-friendly web development project focusing on fundamental concepts.',
                    fullDescription: 'This project is designed for beginners to learn the basics of web development. You will work with HTML for structure, CSS for styling, and JavaScript for interactivity. The project includes step-by-step instructions and helpful resources.'
                },
                'Intermediate': {
                    tech: 'HTML, CSS, JavaScript, API',
                    duration: '1-2 days',
                    description: 'An intermediate web project that incorporates API integration and modern JavaScript.',
                    fullDescription: 'This intermediate project challenges you to build a dynamic web application using modern JavaScript techniques. You will learn to work with APIs, handle asynchronous operations, and implement responsive design principles.'
                },
                'Advanced': {
                    tech: 'React, Node.js, MongoDB, Express',
                    duration: '1-2 weeks',
                    description: 'An advanced full-stack web application with modern technologies.',
                    fullDescription: 'This advanced project involves building a complete full-stack application using the MERN stack. You will implement authentication, database operations, RESTful APIs, and deploy the application to a cloud platform.'
                }
            },
            'Mobile Development': {
                'Beginner': {
                    tech: 'React Native, JavaScript',
                    duration: '3-5 hours',
                    description: 'A simple mobile app for beginners using React Native.',
                    fullDescription: 'Learn mobile development fundamentals by building a cross-platform app with React Native. This project covers navigation, state management, and basic mobile UI components.'
                },
                'Intermediate': {
                    tech: 'React Native, Firebase, JavaScript',
                    duration: '1-2 days',
                    description: 'A mobile app with backend integration using Firebase.',
                    fullDescription: 'Build a feature-rich mobile application with real-time data synchronization using Firebase. Learn about authentication, cloud storage, and push notifications.'
                },
                'Advanced': {
                    tech: 'React Native, Node.js, PostgreSQL',
                    duration: '2-3 weeks',
                    description: 'A complex mobile application with custom backend.',
                    fullDescription: 'Develop a production-ready mobile application with a custom backend API. Implement advanced features like offline synchronization, performance optimization, and app store deployment.'
                }
            }
        };
        
        const template = templates[category]?.[difficulty];
        if (!template) {
            return {
                tech: 'To be determined',
                duration: 'Variable',
                description: 'Project description to be added.',
                fullDescription: 'Detailed project description and requirements to be added.'
            };
        }
        
        return template;
    }
    
    static validateBulkImport(data) {
        const results = {
            valid: [],
            invalid: [],
            warnings: []
        };
        
        data.forEach((item, index) => {
            const errors = this.validateProjectData(item);
            
            if (errors.length === 0) {
                results.valid.push({
                    index,
                    data: this.sanitizeProjectData(item)
                });
            } else {
                results.invalid.push({
                    index,
                    data: item,
                    errors
                });
            }
            
            // Check for potential duplicates
            const existingProject = projects.find(p => 
                p.title.toLowerCase() === item.title?.toLowerCase()
            );
            
            if (existingProject) {
                results.warnings.push({
                    index,
                    message: `Project "${item.title}" may be a duplicate of existing project`
                });
            }
        });
        
        return results;
    }
    
    static async backupToCloud(data, provider = 'localStorage') {
        switch (provider) {
            case 'localStorage':
                const backupKey = `backup_${Date.now()}`;
                localStorage.setItem(backupKey, JSON.stringify(data));
                return { success: true, key: backupKey };
                
            case 'indexedDB':
                return new Promise((resolve, reject) => {
                    const request = indexedDB.open('ProjectHubBackups', 1);
                    
                    request.onerror = () => reject(request.error);
                    
                    request.onsuccess = () => {
                        const db = request.result;
                        const transaction = db.transaction(['backups'], 'readwrite');
                        const store = transaction.objectStore('backups');
                        
                        const backupData = {
                            id: Date.now(),
                            timestamp: new Date().toISOString(),
                            data: data
                        };
                        
                        const addRequest = store.add(backupData);
                        
                        addRequest.onsuccess = () => {
                            resolve({ success: true, id: backupData.id });
                        };
                        
                        addRequest.onerror = () => reject(addRequest.error);
                    };
                    
                    request.onupgradeneeded = (event) => {
                        const db = event.target.result;
                        const store = db.createObjectStore('backups', { keyPath: 'id' });
                        store.createIndex('timestamp', 'timestamp', { unique: false });
                    };
                });
                
            default:
                throw new Error('Unsupported backup provider');
        }
    }
    
    static formatDuration(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (days > 0) return `${days}d ${hours % 24}h`;
        if (hours > 0) return `${hours}h ${minutes % 60}m`;
        if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
        return `${seconds}s`;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdminUtils;
} else {
    window.AdminUtils = AdminUtils;
}
