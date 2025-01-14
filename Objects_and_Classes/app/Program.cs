using System;
using System.Collections.Generic;

class Admin
{
    private Dictionary<string, string> existingCourses = new Dictionary<string, string>
    {
        { "Math", "MATH101" },
        { "Science", "SCI101" },
        { "English", "ENG101" },
        { "History", "HIST101" }
    };

    public void addCourse(Course course)
    {
        // Add course to the database
        if (existingCourses.ContainsKey(course.courseName))
        {
            Console.WriteLine("Course already exists");
        }
        else
        {
            existingCourses[course.courseName] = course.courseCode;
            Console.WriteLine("Course added successfully");
        }
    }

    public void listCourses()
    {
        foreach (var course in existingCourses)
        {
            Console.WriteLine($"Course: {course.Key}, CourseCode: {course.Value}");
        }
    }

    public void deleteStudent(Student student) { }

    public void viewEnrolledStudents(Course course) { }
}

class Student
{
    private string firstName;
    private string lastName;
    private Course enrolledCourse;

    public Student(string firstName, string lastName, Course enrolledCourse)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.enrolledCourse = enrolledCourse;
    }
}

class Course
{
    public string courseName;
    public string courseCode;

    public Course(string courseName, string courseCode)
    {
        this.courseName = courseName;
        this.courseCode = courseCode;
    }
}

public class Program
{
    static void Main(string[] args)
    {
        Course agriculture = new Course("Agriculture", "AGRI101");
        Course computerScience = new Course("Computer Science", "CS101");

        Admin admin = new Admin();
        admin.addCourse(agriculture);
        admin.addCourse(computerScience);
        admin.listCourses();
    }
}
