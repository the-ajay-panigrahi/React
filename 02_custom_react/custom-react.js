function customRender(element, container) {
  /*
    let domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    domElement.setAttribute("href", element.props.href);
    domElement.setAttribute("target", element.props.target);
    container.appendChild(domElement);
  */
  let domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (const key in element.props) {
    if (key === "children") {
      continue;
    }
    domElement.setAttribute(key, element.props[key]);
  }
  container.appendChild(domElement);
}

const reactElement1 = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit to Google",
};

const reactElement2 = {
  type: "h1",
  props: {
    title: "Jai Shree Ram",
  },
  children: "Custom React",
};

const reactElement3 = {
  type: "p",
  props: {
    style:
      "background-color:yellow; color:red; font-weight:900; font-family:sans-serif; text-align:center; padding:10px",
  },
  children: "I am a styled paragraph",
};

const mainContainer = document.getElementById("root");

customRender(reactElement2, mainContainer);
customRender(reactElement1, mainContainer);
customRender(reactElement3, mainContainer);
