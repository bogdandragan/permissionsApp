import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const permissions = [
            {
                id: 1, name: 'admin', users: [
                {id: 1, username: 'admin@analysisworks.com', firstname: '', lastname: ''},
                {id: 3, username: 'jazzy@analysisworks.com', firstname: '', lastname: ''},
                {id: 4, username: 'test@analysisworks.com', firstname: '', lastname: ''}
            ]
            },
            {
                id: 2, name: 'inpatient', users: [
                {id: 1, username: 'admin@analysisworks.com', firstname: '', lastname: ''},
                {id: 2, username: 'demo@analysisworks.com', firstname: '', lastname: ''},
            ]
            },
            {
                id: 3, name: 'meta', users: [
                {id: 1, username: 'admin@analysisworks.com', firstname: '', lastname: ''},
                {id: 2, username: 'demo@analysisworks.com', firstname: '', lastname: ''},
                {id: 3, username: 'jazzy@analysisworks.com', firstname: '', lastname: ''},
                {id: 4, username: 'test@analysisworks.com', firstname: '', lastname: ''}
            ]
            },
            {
                id: 4, name: 'surgical', users: [
                {id: 1, username: 'admin@analysisworks.com', firstname: '', lastname: ''},
                {id: 2, username: 'demo@analysisworks.com', firstname: '', lastname: ''},
            ]
            }
        ];

        const users = [
            {
                id: 1, username: 'admin@analysisworks.com', firstname: '', lastname: '', permissions: [
                {name: 'admin', enabled: true},
                {name: 'inpatient', enabled: true},
                {name: 'meta', enabled: true},
                {name: 'surgical', enabled: true}
            ],
                logins: [
                    {date: '', count: ''},
                ]
            },
            {
                id: 2, username: 'demo@analysisworks.com', firstname: '', lastname: '', permissions: [
                {name: 'admin', enabled: false},
                {name: 'inpatient', enabled: true},
                {name: 'meta', enabled: true},
                {name: 'surgical', enabled: true}
            ],
                logins: [
                    {date: '', count: ''},
                ]
            },
            {
                id: 3, username: 'jazzy@analysisworks.com', firstname: '', lastname: '', permissions: [
                {name: 'admin', enabled: true},
                {name: 'inpatient', enabled: false},
                {name: 'meta', enabled: true},
                {name: 'surgical', enabled: false}
            ],
                logins: [
                    {date: '', count: ''},
                ]
            },
            {
                id: 4, username: 'test@analysisworks.com', firstname: '', lastname: '', permissions: [
                {name: 'admin', enabled: true},
                {name: 'inpatient', enabled: false},
                {name: 'meta', enabled: true},
                {name: 'surgical', enabled: false}
            ],
                logins: [
                    {date: '', count: ''},
                ]
            }
        ];

        return {permissions, users};
    }
}