/*
Attendance System
------------------

API Tasks:
----------

1. Create Models
    - User
    - Profile
    - Admin Attendance
    - Student Attendance
2. Authentication
    - /login
    - /register
    - /change-password
3. Middlewares
    - Authenticate
    - Authorize
4. TimeSheet and Attendance
    - GET /timesheet [private]
    - GET /attendance [private]
    - GET /attendanceStatus [private]
5. User CRUD
    - Get User
    - Get User By Id
    - Create User
    - Update User
    - Delete User
6. Profile CRUD
    - Get Profile
    - Get Profile By Id
    - Create Profile
    - Update Profile
    - Delete Profile
    - GET /timesheet/userId [private]
7. Admin control over attendance
    - POST /attendance/enable [private]
    - GET /attendance/disabled/:attendanceId [private]
8. Generate stats
    - GET /timesheet/stats [private]
*/