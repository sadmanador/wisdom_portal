# Wisdom Portal

[Live Link](https://fancy-malabi-f5aa45.netlify.app// "Wisdom portal")

## Primary Task

- [x] Navbar must contain a Brand name on the left side. On the right side of the Navbar there should be a user image or 2-3 nav links.
- [x] Make JSON of minimum 4 data. Each data contains the following 5 information: id, author info, title, img, read_duration, publish date.
- [x] Fetch the above mentioned json file and create/show four cards with the JSON data. Each card will contain the information of a single blog.
- [x] Initially, “Time spent on reading” will be 0. After clicking on the “Mark as read” button, the read time of the selected card will be added to the previous time & shown on the “Time spent on read” section. No hour-minute conversion needed. More than 1 click is allowed for a single blog.
- [x] After clicking on the bookmark icon for each blog, update the total number of blogs added as bookmark and show it on the right sidebar. Initially, it is zero. You can bookmark a blog multiple times.
- [x] Show the title of each bookmarked blog on the right sidebar. Initially the title lists will be empty.

## Bonus Task

- [x] Create a blog Component & use it as the last component of the page. Blog component must have the answers of the following questions: Props vs state, How does useState work?, Purpose of useEffect other than fetching data, How Does React work?.
- [x] Your repository must have a minimum of 8 meaningful GitHub commits.
- [x] You have to make the entire UI mobile responsive. Place the right sidebar component below the blogs component in mobile view.
- [x] Show a toast / sweetalert with a suitable message if user tries to bookmark a blog more than once. e.g., “You Have Already Bookmarked This Blog” . You can’t use browser alert.
