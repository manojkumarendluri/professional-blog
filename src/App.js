import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Photography from './components/Photography';
import Travelling from './components/Travelling';
import ShortStoryWriting from './components/ShortStoryWriting';
export default function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/photography", element: _jsx(Photography, {}) }), _jsx(Route, { path: "/travelling", element: _jsx(Travelling, {}) }), _jsx(Route, { path: "/short-story-writing", element: _jsx(ShortStoryWriting, {}) })] }));
}
