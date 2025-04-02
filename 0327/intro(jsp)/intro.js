document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    body.appendChild(wrapper);

    // Section: My Info
    const myInfoSection = document.createElement("section");
    myInfoSection.id = "my_info";
    wrapper.appendChild(myInfoSection);

    const img = document.createElement("img");
    img.src = "./류연우1민d.jpg";
    img.alt = "류연우의 얼굴 사진";
    myInfoSection.appendChild(img);

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    myInfoSection.appendChild(table);

    const infoData = [
        ["이름", "류연우"],
        ["직업", "학생"],
        ["나이", "24"],
        ["거주지", "부산"]
    ];

    infoData.forEach(([label, value]) => {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = label;
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(th);
        row.appendChild(td);
        tbody.appendChild(row);
    });

    // Section: Contact
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    wrapper.appendChild(contactSection);

    const contactList = document.createElement("ul");
    contactSection.appendChild(contactList);

    const contacts = [
        { text: "010-9871-6545", href: "tel:01098716545" },
        { text: "christin6545@naver.com", href: "mailto:christin6545@naver.com" },
        { text: "@myfacebook", href: "https://facebook.com/myfacebook" },
        { text: "@myyoutube", href: "https://www.youtube.com/@MONBRUNO/videos" }
    ];

    contacts.forEach(({ text, href }) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = href;
        a.textContent = text;
        a.target = "_blank";
        li.appendChild(a);
        contactList.appendChild(li);
    });

    // Section: Skills
    const skillSection = document.createElement("section");
    skillSection.id = "skill";
    wrapper.appendChild(skillSection);

    const skillList = document.createElement("ol");
    skillSection.appendChild(skillList);
    ["HTML", "CSS", "Javascript"].forEach(skill => {
        const li = document.createElement("li");
        li.textContent = `#${skill}`;
        skillList.appendChild(li);
    });

    // Apply styles dynamically
    const style = document.createElement("style");
    style.textContent = `
        body { background-color: #f5f5f5; color: #2f2f2f; font-family: 'Noto Sans KR', sans-serif; font-size: 16px; }
        .wrapper { width: 85%; margin: 20px auto; }
        section { background-color: white; border-radius: 10px; padding: 40px; margin-bottom: 10px; }
        img { width: 100px; height: auto; border-radius: 50px; margin-right: 40px; }
        ul { list-style: none; padding: 0; }
        ul li { margin-bottom: 4px; }
        ul li a { color: inherit; text-decoration: none; }
        ul li a:hover { text-decoration: underline; color: gold; }
        ol { list-style: none; padding: 0; }
        ol li { display: inline-block; background-color: gold; padding: 4px 10px; border-radius: 32px; margin: 0 8px 8px 0; }
    `;
    document.head.appendChild(style);
});
