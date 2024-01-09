https://themes.getbootstrap.com/preview/?theme_id=38342

import React, { useState } from "react";

const Tabs = () => {
const [activeTab, setActiveTab] = useState("Home");

const handleTabClick = (tab) => {
setActiveTab(tab);
};

return (

<div>
<ul className="tabs">
<li onClick={() => handleTabClick("Home")}>Home</li>
<li onClick={() => handleTabClick("About")}>About</li>
<li onClick={() => handleTabClick("Contact")}>Contact</li>
</ul>
<div className="tab-content">
{activeTab === "Home" && <p>This is the home page.</p>}
{activeTab === "About" && <p>This is the about page.</p>}
{activeTab === "Contact" && <p>This is the contact page.</p>}
</div>
</div>
);
};

export default Tabs;
