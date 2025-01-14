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
			self.existing_courses[course.course_name] = course.course_code
			print(f"{course.course_name} course added successfully")
			
	def list_courses(self):
		print("\n=========== Course List ===========\n")
		print("Course name: Course Code")
		for course_name, course_code in self.existing_courses.items():
			print(f"{course_name}: {course_code}")

	def add_course_topics(self, course_code, *topics):
		if course_code in self.existing_courses:
			self.existing_courses[course_code]["topics"] = topics
			print("Topics added successfully")
		else:
			print("Course does not exist")

	def remove_course(self, course_code):
		if course_code in Admin.existing_courses:
			del self.existing_courses[course_code]
			print("Course removed successfully")
		else:
			print("Course code does not exist")


class Student:
	def __init__(self):
		pass

	def register(self, first_name, last_name, enrolled_course):
		self.first_name = first_name
		self.last_name = last_name
		self.enrolled_course = enrolled_course

		course_names = [course["name"] for course in Admin.existing_courses.values()]
		if enrolled_course in course_names:
			print(f"{self.first_name} {self.last_name} has registered for {self.enrolled_course} course")
		else:
			print("Course does not exist")

	def view_course_details(self):
		print("\n=========== Course Details ===========\n")
		for course_code, course_details in Admin.existing_courses.items():
			if course_details["name"] == self.enrolled_course:
				print(f"Course Code: {course_code}")
				print(f"Course Name: {course_details['name']}")
				print(f"Topics: {', '.join(course_details['topics'])}")
			else:
				print("Course does not exist")


class Course:
	def __init__(self, courseName, courseCode):
		self.course_name = courseName
		self.course_code = courseCode


# Main Program
if __name__ == "__main__":
	course1 = Course("ART101", "Art")
	course2 = Course("CS101", "Computer Science")
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