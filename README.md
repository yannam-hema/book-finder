# Aganitha-Web-developer-Task-BookFinder
Book Finder web Application will help to search for books 

## 📖 Book Finder 

-Book Finder is a minimalist and user-friendly web application built with React and Tailwind CSS that allows users to search for books by title using the Open Library API.

-The application focuses on simplicity and clean design, ensuring a smooth user experience across both desktop and mobile devices. Users can quickly search for books, view essential details such as title,cover image, and click on a book to explore more details(title, author , image and published year) in a popup.

-Special attention has been given to error handling and fallback states:

-Friendly messages guide the user when no results are found or when errors occur.

-Placeholder images are displayed when book covers are missing.

-A clear landing page introduces the app and resets when the search input is cleared.

- By following best coding practices (component reusability, separation of concerns, custom hooks for API handling, and responsive design principles), the app is lightweight, maintainable, and scalable for future enhancements like filters, infinite scroll, and dark mode.
-----------------------------------------------------------------
# ✅ Best Practices Followed

**Project Structure**

Modular folder structure with separate components/ and utils/ directories.

Removed unused CRA boilerplate files to keep repo clean.

Each component follows the Single Responsibility Principle.

**React Component Design**

Used functional components with React Hooks.

Lifted state up where needed (e.g., Main handles state, Header handles only input).

Created reusable components (BookCard, Popup) for clarity and maintainability.

**API Handling**

API logic encapsulated in a custom hook (useFetchBookData).

Implemented loading, error, and success states for better user feedback.

Simplified and cleaned API response before passing to UI.

**Styling & Responsiveness**

Styled with Tailwind CSS for fast and consistent design.

Responsive design implemented for both mobile and desktop.

Used Tailwind breakpoints (sm, md) for layout adjustments.

**User Experience (UX)**

Added loading indicators (spinner/skeleton) for smooth transitions.

Implemented friendly fallback messages when no books are found or an error occurs.

Provided image placeholder when a cover is missing.

Popup supports keyboard (Esc) and click outside to close.

**Code Cleanliness**

Consistent naming conventions and formatting.

Minimalist, clean, and maintainable codebase.

**Future Enhancements (Planned)**

Load More / Infinite Scroll for results.

Additional filters (e.g., genre, year).

Global state management with Context API for scaling.



# PLANNING AND DESIGN PHASE

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
# EXECUTION / DEVELOPMENT PHASE

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

# Commit 7
**Responsiveness**
- header, book cards and popup now look good on both small and large screens

# Commit 8
**added loading and error handling for book search**  
- shows "Getting your books ??..." when loading  
- shows API failed message when request fails  
- shows no results message when search returns empty  

# commit 9
**made main page cleaner and split things into small components**
- separated out MainMessage, GettingBooks, ErrorElement, NoResult
- main page now shows intro only when no query or books are cleared
- when searching again, old results vanish before new fetch
- loading/error/no-results messages are simple and reusable now

# commit 10
-made reponsive other components

# Future Advancements
## OpenLibrary Integration (Primary Goal)

Each book popup will have a View Details button.

Clicking it will redirect users to the respective OpenLibrary book page for more information.

Example: Author bio, book editions, publishing details, etc.

## Default Categories on Homepage

Add pre-defined categories like Fiction, Non-Fiction, Science, Technology, Self-Help, History, Kids etc.

Users can browse directly by category instead of only searching.

## Enhanced Search with Auto-Suggestions

As users type in the search bar, real-time recommendations (book titles, authors, genres) will be displayed.

## Load More Button / Infinite Scroll

Instead of showing limited results, users can click Load More (or auto-load while scrolling)

##(personal interest) 
**OpenAI Library Integration**

When a user clicks on View Book, it will fetch additional book details from the OpenAI API (such as summaries, reviews, and recommendations).


