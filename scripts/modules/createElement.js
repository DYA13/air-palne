const createElement = (tag, attribute) => {
const element = document.createElement(tag);
Object.assign(element, attribute);

return element;
};

export default createElement;