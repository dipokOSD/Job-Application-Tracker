### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: selects one element by ID.
getElementsByClassName: selects all elements with a class (HTMLCollection).
querySelector: selects first element matching a CSS selector.
querySelectorAll: selects all elements matching a CSS selector (NodeList).


### 2. How do you create and insert a new element into the DOM?
createElement() → create element
textContent / className → add content/attributes
appendChild() → insert into DOM


### 3. What is Event Bubbling? And how does it work?
Event starts at child element and moves up to parent elements.
Happens in the order: child → parent → grandparent 


### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation
Add one event listener on parent to handle all child events.
Useful because:
Saves memory (fewer listeners)
Works for dynamic elements added later
Makes code simpler and efficient


### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() → stops default behavior
stopPropagation() → stops event from moving up the DOM
