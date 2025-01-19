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
        self.existing_courses = {
        "FRONT101": {"name": "Frontend Development", "topics": ["HTML", "CSS", "JavaScript"]},
        "BACK101": {"name": "Backend Development", "topics": ["Python", "Django", "REST APIs"]},
        "DATA101": {"name": "Data Analysis", "topics": ["Pandas", "NumPy", "Data Visualization"]},
        "ML101": {"name": "Machine Learning", "topics": ["Supervised Learning", "Unsupervised Learning", "Neural Networks"]}
        }  # Store courses in a dictionary
        self.is_admin = True # to confirm the status of the admin

    # Method to add a course
    def add_course(self, course):
        if course.course_code in self.existing_courses:
            print(f"{course.course_name} course already exists.")
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
        self.enrolled_course = ""

    # Method to register a student
    def register(self, first_name, last_name, enrolled_course):
        self.first_name = first_name
        self.last_name = last_name
        self.enrolled_course = enrolled_course

        # Check if the course name exists in the existing courses
        for course_code, course_details in Admin().existing_courses.items():
            if course_details['name'] == enrolled_course:
                # Add the student to the enrolled_students dictionary
                if course_code not in self.enrolled_course:
                    self.enrolled_students[course_code] = []  # Initialize list for the course
                self.enrolled_students[course_code].append(f"{first_name} {last_name}")
                print(f"{self.first_name} {self.last_name} has registered for {self.enrolled_course} course")
                return
        # If the course name was not found, print an error message
        print("Course does not exist")

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
    print("\n- Creating new Course Objects....")
    course1 = Course("Art", "ART101")
    course3 = Course("UI/UX Design", "UIUX101")
    course2 = Course("Science", "SCI101")

    # Add topics to courses
    print("\n- Adding topics to new Course Objects")
    course1.add_topic("Painting", "Drawing", "Drama")
    course3.add_topic("Wireframing", "Prototyping", "User Research")
    course2.add_topic("Soil")

    # Add courses to the admin
    print("\n- Admin adding the created Courses Objects")
    admin.add_course(course1)
    admin.add_course(course2)

    # List courses
    print("\n- Admin listing the existing courses")
    admin.list_courses()

    # Register students
    print("\n- A student registering to a course")
    student1 = Student()
    student1.register("Mmesoma", "Okeke", "Frontend Development")
    student2 = Student()
    student2.register("Chidinma", "Okolo", "Backend Development")

    # View enrolled students
    print("\n- Admin viewing the registered students")
    admin.view_enrolled_students()

    # Remove a course
    print("\n- Admin removing a course from the existing courses")
    admin.remove_course("FRONT101")
    print("\n- Admin viewing the remaining courses\n")
    admin.list_courses()
