import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    // mock response data for /api/permissions/
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

    // mock response data for /api/users/
    const users = [
      {
        id: 1, username: 'admin@analysisworks.com', firstname: '', lastname: '', permissions: [
        {name: 'admin', enabled: true},
        {name: 'inpatient', enabled: true},
        {name: 'meta', enabled: true},
        {name: 'surgical', enabled: true}
      ],
        logins: [
          {date: '2017-12-01', visits: 2},
          {date: '2017-12-02', visits: 3},
          {date: '2017-12-03', visits: 5},
          {date: '2017-12-04', visits: 1},
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
          {date: '2017-11-29', visits: 3},
          {date: '2017-11-30', visits: 4},
          {date: '2017-12-01', visits: 5},
          {date: '2017-12-02', visits: 2},
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
          {date: '2017-11-30', visits: 1},
          {date: '2017-12-01', visits: 2},
          {date: '2017-12-02', visits: 3},
          {date: '2017-12-03', visits: 2},
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
          {date: '2017-12-01', visits: 2},
          {date: '2017-12-02', visits: 3},
          {date: '2017-12-03', visits: 1},
          {date: '2017-12-04', visits: 4},
        ]
      }
    ];

    return {permissions, users};
  }
}
