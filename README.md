# Aganitha-Web-developer-Task-BookFinder
Book Finder web Application will help to search for books 

## Book Finder Build Roadmap (Priority Order)

**Phase 1 – Core Foundation (MVP must work)**

 Setup Project → Create React app, basic folder structure.

 Search Bar → Implement input + trigger API call (Open Library).

 Show Search Results (grid) → Render list of BookCards with title, author, cover (no filters yet).

 Loader + Error Handling → Show spinner while fetching, error message if API fails.

**Phase 2 – Core User Flow**

 Book Details Modal → Open popup on card click, show full details (title, author, description, rating).

 Responsive Layout → Adjust grid (desktop vs. mobile).

**Phase 3 – Advanced Features**

 Filters Bar (on top) → Add author filter + page range filter.

 Infinite Scroll → Fetch next page as user scrolls.

 Load More Button (fallback) → Manual trigger to fetch next page.

 Empty State Message → If no results, show friendly message.

**Phase 4 – Landing Page Polish**

 Header + Tagline → Add logo/name + small slogan.

 Fixed Genre Collections → Horizontal rows (Fantasy, Science & Tech, etc.), each fetching from API.

**Phase 5 – Extras & UX Polishing**

 Accessibility → Modal keyboard handling, alt text for covers.

 Fallbacks for Missing Data → Show placeholder cover or “No rating available.”

 Final Styling & Minimalist UI Polish → Spacing, fonts, colors, smoothnes

-------------------------------------------------------------------------------

# Commit 1(Code)
## initialize React app with basic structure

- Created React app using CRA
- Removed default boilerplate files
- Added components folder
- Created Main component
- Created Header component with logo

# commit 2
**configured Tailwind css**
## Header component
- Included logo and tagline
- Added main headline
- Added search bar with button

# commit 3
**integrate OpenLibrary API with custom hook**
- created useFetchBookData custom hook inside utils to fetch books from OpenLibrary API
- used useState to manage input name and committed search term
- connected hook to component to fetch books based on user input
- set up search trigger on button click / Enter key
- followed best practice by keeping custom hooks inside utils

# commit 4
**moved search results rendering into Body with BookCard component**

- lifted state up to Maincomponent (Header only handles search input now)
- Body receives searchedBooks as props and renders them
- created BookCard component to show only selected fields (title, author, year, cover)
- cleaned useFetchBookData to return simplified data instead of full API response
- improved UI separation to follow single responsibility principle

# commit 5
**Styled book card componet**

# Commit 6
**clickable book cards + popup for details**

- book card now triggers parent when clicked
- body keeps track of which book is active and shows popup
- popup in center with dark background (click outside or Esc to close)
- added basic keyboard support (Esc key closes)
- hover and image rendering feels nice now