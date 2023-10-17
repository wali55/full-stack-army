/**
 * Agenda
 * - Functional requirement analysis
 * - Create a basic SRS(Software Requirement Specifications)
 * - Choose technologies
 * - Setup project
 */

/*
Clients Requirements:

We need an attendance system. Students can create their own profile. Admin can see list of students and their attendances. Admin can enable and disable attend button also this button can be disabled based on a timer. Each time admin enable attend button, students can participate only once. Each day, students will have a timesheet of attendance. Students can see their time logs and attend button when enabled.
*/

/*
Functional Requirements:
------------------------
Two end users: admin and student

Admin:
- We will generate a super admin during application installation
- Admin can delete, update or check students information
- Admin can change status of a student
- Admin can check time sheet of a student
- Admin can enable or disable attendance button
- Admin can check stats of a given day

Student:
- Student can register themselves.
- There will be following account status for students
    - Pending
    - Active
    - Reject
- User can login with there credentials
- Pending and rejected user won't have anything in their profile
- Active users can update their profile info
    - First Name
    - Last Name
    - Email
    - Phone No
    - Profile Picture/Avatar
- Active users can see their logs(past activities)
    - Calender view
    - List view
    - Table view
- Active users can participate in attendance system
- User can logout
*/