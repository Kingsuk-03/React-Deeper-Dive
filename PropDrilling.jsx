// The problem with passing props
// Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
// But passing props can become verbose and inconvenient when you need to pass some prop deeply through
// the tree, or if many components need the same prop. The nearest common ancestor could be far removed from
// the components that need data, and lifting state up that high can lead to a situation called "prop drilling"

// IT MEANS IN ORDER TO USE A STATE IN LOWEST CHILD U HAVE TO PASS THE PROP IN IT'S ALL ANCESTORS THOUGH THE PROP IS NOT NEEDED FOR THOSE ANCESTORS
