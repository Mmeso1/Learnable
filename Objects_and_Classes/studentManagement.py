class Admin:	
	# Initialize the dictionary of existing courses
	existing_courses = {
		"MATH101": {"name": "Math", "topics": ["Algebra", "Geometry", "Calculus"]},
    	"SCI101": {"name": "Science", "topics": ["Soil", "Air", "Pollution"]},
    	"ENG101": {"name": "English", "topics": ["Grammar", "Literature", "Writing"]},
    	"HIST101": {"name": "History", "topics": ["World War I", "Renaissance", "Cold War"]}
	}

	def add_course(self, course):
		if course.course_name in self.existing_courses:
			print("Course already exists")
		else:
			self.existing_courses[course.course_code] = {"name": course.course_name, "topics": []}
			print(f"{course.course_name} course added successfully")
			
	def list_courses(self):
		print("\n=========== Course List ===========\n")
		print("Course Code: Course Details => Topics")
		for  course_code, course_details in self.existing_courses.items():
			topics = ', '.join(course_details['topics']) if course_details['topics'] else 'None'
			print(f"{course_code}: {course_details['name']} => {topics}")

	def add_course_topics(self, course_code, *topics):
		if course_code in self.existing_courses:
			self.existing_courses[course_code]["topics"].extend(topics)
			print("Topics added successfully")
		else:
			print("Course does not exist")

	def remove_course(self, course_code):
		if course_code in self.existing_courses:
			del self.existing_courses[course_code]
			print("Course removed successfully")
		else:
			print("Course code does not exist")

	def viewEnrolledStudents(self):
		print("\n=========== Enrolled Students ===========\n")
		for course_code, students in Student.enrolled_students.items():
			for student_name in students:
				print(f"{student_name} is enrolled in {course_code} course")


class Student:
	enrolled_students = {}
	def __init__(self):
		self.first_name = ""
		self.last_name = ""
		self.enrolled_course = ""

	def register(self, first_name, last_name, enrolled_course):
		self.first_name = first_name
		self.last_name = last_name
		self.enrolled_course = enrolled_course

		# Check if the course name exists in the existing courses
		for course_code, course_details in Admin.existing_courses.items():
			if course_details['name'] == enrolled_course:
				# Add the student to the enrolled_students dictionary
				if course_code not in self.enrolled_course:
					self.enrolled_students[course_code] = []  # Initialize list for the course
				self.enrolled_students[course_code].append(f"{first_name} {last_name}")
				print(f"{self.first_name} {self.last_name} has registered for {self.enrolled_course} course")
				return
		# If the course name was not found, print an error message
		print("Course does not exist")

	def view_course_details(self):
		print("\n=========== Course Details ===========\n")
		if self.enrolled_course in Admin.existing_courses:
			course_details = Admin.existing_courses[self.enrolled_course]
			print(f"Course Code: {self.enrolled_course}")
			print(f"Course Name: {course_details['name']}")
			print(f"Topics: {', '.join(course_details['topics'])}")
		else:
			print("Course does not exist")

	def list_students(self):
		return f"{self.first_name} {self.last_name} is enrolled in {self.enrolled_course} course"


class Course:
	def __init__(self, courseName, courseCode):
		self.course_name = courseName
		self.course_code = courseCode


# Main Program
if __name__ == "__main__":
	course1 = Course("Art", "ART101")
	course2 = Course("Computer Science", "CS101")
	admin = Admin()
	admin.add_course(course1)
	admin.add_course(course2)
	admin.list_courses()
	student1 = Student()
	student1.register("Mmesoma", "Okeke", "Math")
	student2 = Student()
	student2.register("Chidinma", "Okolo", "English")
	admin.remove_course("ART101")
	admin.remove_course("MS201")
	admin.list_courses()
	admin.viewEnrolledStudents()