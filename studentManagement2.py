class Course:
    def __init__(self, course_name, course_code):
        self.course_name = course_name
        self.course_code = course_code
        self.topics = []  # Initialize topics for the course

    # Method to add topics to the course
    def add_topic(self, *topics):
        self.topics.extend(topics)
        print(f"Topics added to {self.course_name}: {', '.join(topics)}")

    # Method to display course details
    def display_details(self):
        topics_list = ", ".join(self.topics) if self.topics else "None"
        print(f"Course Code: {self.course_code}, Name: {self.course_name}, Topics: {topics_list}")


class Admin:
    def __init__(self):
        self.existing_courses = {}  # Store courses in a dictionary

    # Method to add a course
    def add_course(self, course):
        if course.course_code in self.existing_courses:
            print(f"Course already exists.")
        else:
            self.existing_courses[course.course_code] = {
                "name": course.course_name,
                "topics": course.topics
            }
            print(f"{course.course_name} course added successfully.")

    # Method to list all courses
    def list_courses(self):
        print("\n=========== Course List ===========\n")
        print("Course Code: Course Details => Topics")
        for course_code, course_details in self.existing_courses.items():
            topics = ', '.join(course_details['topics']) if course_details['topics'] else 'None'
            print(f"{course_code}: {course_details['name']} => {topics}")

    # Method to remove a course
    def remove_course(self, course_code):
        if course_code in self.existing_courses:
            self.existing_courses.pop(course_code)
            print(f"Course removed successfully.")
        else:
            print("Course does not exist.")

    # Method to view all enrolled students
    def view_enrolled_students(self):
        print("\n=========== Enrolled Students ===========\n")
        for course_code, students in Student.enrolled_students.items():
            for student_name in students:
                print(f"{student_name} is enrolled in {course_code} course.")


class Student:
    enrolled_students = {}  # Class-level attribute to track all enrolled students

    def __init__(self):
        self.first_name = ""
        self.last_name = ""
        self.enrolled_course_code = ""

    # Method to register a student
    def register(self, first_name, last_name, enrolled_course):
        self.first_name = first_name
        self.last_name = last_name
        for course_code, course_details in Admin().existing_courses.items():
            if course_details['name'] == enrolled_course:
                self.enrolled_course_code = course_code
                if course_code not in Student.enrolled_students:
                    Student.enrolled_students[course_code] = []  # Initialize list for the course
                Student.enrolled_students[course_code].append(f"{first_name} {last_name}")
                print(f"{self.first_name} {self.last_name} has registered for {enrolled_course} course.")
                return
        print("Course does not exist.")

    # Method to view course details
    def view_course_details(self, admin):
        if self.enrolled_course_code in admin.existing_courses:
            course_details = admin.existing_courses[self.enrolled_course_code]
            print("\n=========== Course Details ===========\n")
            print(f"Course Code: {self.enrolled_course_code}")
            print(f"Course Name: {course_details['name']}")
            topics = ', '.join(course_details['topics']) if course_details['topics'] else "None"
            print(f"Topics: {topics}")
        else:
            print("No course found.")


# Main Program
if __name__ == "__main__":
    # Create admin and courses
    admin = Admin()
    course1 = Course("Math", "MATH101")
    course2 = Course("Science", "SCI101")
    course3 = Course("English", "ENG101")

    # Add topics to courses
    course1.add_topic("Algebra", "Geometry", "Calculus")
    course2.add_topic("Soil", "Air", "Pollution")
    course3.add_topic("Grammar", "Literature", "Writing")

    # Add courses to the admin
    admin.add_course(course1)
    admin.add_course(course2)
    admin.add_course(course3)

    # List courses
    admin.list_courses()

    # Register students
    student1 = Student()
    student1.register("Mmesoma", "Okeke", "Math")
    student2 = Student()
    student2.register("Chidinma", "Okolo", "English")

    # View enrolled students
    admin.view_enrolled_students()

    # Remove a course
    admin.remove_course("MATH101")
    admin.list_courses()
