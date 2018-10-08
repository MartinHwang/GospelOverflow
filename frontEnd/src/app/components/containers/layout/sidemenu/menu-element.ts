export const menus = [   
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': '/home/dashboard',
        'open': false
    },
    {
        'name': 'Lists',
        'icon': 'list',
        'link': false,
        'open': false,
        //'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': 'User',
                'icon': 'person',
                'link': '/home/users',
                'open': false,
            },
            {
                'name': 'Member',
                'icon': 'people',
                'link': '/home/members',
                'open': false,
            },
            {
                'name': 'Dialog Member',
                'icon': 'person_add',
                'link': '/home/dialogMmembers',
                'open': false,
            },
            {
                'name': 'Event',
                'icon': 'event_to_app',
                'link': '/home/events',
                'open': false,
            }            
        ]

    },
    {
        'name': 'Services',
        'icon': 'content_copy',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Gallery',
                'icon': 'photo',
                'open': false,
                'link': '/home/pictures',
            }, {
                'name': 'Video',
                'icon': 'videocam',
                'open': false,
                'link': '/home/videos'
            }
        ]
    },
    {
        'name': 'Tables',
        'icon': 'table_chart',
        'link': false,
        'open': false,        
        'sub': [
            {
                'name': 'Fixed',
                'icon': 'grid_on',
                'link': '/home/fixed',
                'open': false,
            },
            {
                'name': 'Responsive',
                'icon': 'filter_center_focus',
                'link': '/home/responsive',
                'open': false,
            }
        ]

    },   
    {
        'name': 'Scheduler',
        'icon': 'schedule',
        'link': '/home/tasks',
        'open': false
    }
];
