# How to Use Context API in react App

## Step 1

### Make a Folder "Store or anyName" in "Src" folder.

## Step 2

### Make a file "NameOfFile-context.js" in store folder.

## Step 3

### Make a arrow Function Named-> "NameOfFileContext" and export default it.

### For Example :

const AuthContext = React.createContext({
isLoggedIn: false, // your varibles or functions which you can use it in app Components
});

export default AuthContext

## Step 4

### Now Make another arrow functional component named => "YourCotextNameProvider" and export it.

### For Example:

export const AuthContextProvider = (props) => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
<AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
{props.children}
</AuthContext.Provider>
);
};

## Step 5

### Now go to "index.js" file in "Src" Folder and import AuthContextProvider arrow component in it.

## Step 6

### After it, Wrap this component to <App /> component.

### For Example

ReactDOM.render(
<AuthContextProvider>
<App />
</AuthContextProvider>,
document.getElementById("root")
);

## Step 7

### Now you can use it context to any component of react.

### import AuthContext to any component and import useContext hook in any component

### For Example :

import AuthContext from "../Store/auth-context";

const ctx = useContext(AuthContext);

Note : If you have still any query. Please let me know on www.asimmaqsood.cf
