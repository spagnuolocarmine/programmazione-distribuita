// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> Programmazione Distribuita</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog.html"><strong aria-hidden="true">1.1.</strong> 🔗 Blog</a></li><li class="chapter-item expanded "><a href="esame_con_intercorso.html"><strong aria-hidden="true">1.2.</strong> 📝 Esame: modalità con prove intercorso per studenti corsisti</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> 1️⃣ 📕</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> Presentazione del corso</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> Introduzione al calcolo distribuito 1</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> Introduzione al calcolo distribuito 2</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 2️⃣ 📕</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> Java Thread 1</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> Java Thread 2</div></li><li class="chapter-item expanded "><a href="01-threads.html"><strong aria-hidden="true">3.3.</strong> Esercitazione Java Thread</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 3️⃣ 📕</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> Java Socket TCP 1</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> Java Socket TCP 2</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> Java Remote Method Invocation (RMI) 1</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="03-rmi.html"><strong aria-hidden="true">4.3.1.</strong>  Hello World RMI</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> RMI 2</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 4️⃣ 📕📗</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="03-rmi.html"><strong aria-hidden="true">5.1.</strong> Laboratorio Java RMI</a></li><li class="chapter-item expanded "><a href="04-javaee.html"><strong aria-hidden="true">5.2.</strong> Introduzione Java Enterprise Edition (Java EE)</a></li><li class="chapter-item expanded "><a href="04-cdi.html"><strong aria-hidden="true">5.3.</strong> Contexts and Dependency Injection (CDI) - Part 1</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 5️⃣ 📗</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="05-javaee-lab.html"><strong aria-hidden="true">6.1.</strong> Laboratorio Java EE</a></li><li class="chapter-item expanded "><a href="04-cdi.html"><strong aria-hidden="true">6.2.</strong> Contexts and Dependency Injection (CDI) - Part 2</a></li><li class="chapter-item expanded "><a href="05-jpa.html"><strong aria-hidden="true">6.3.</strong> Java Persistence API - Part 1</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 6️⃣ 📗</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="05-jpa.html"><strong aria-hidden="true">7.1.</strong> JPA 2</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="06-jpa-lab.html"><strong aria-hidden="true">7.1.1.</strong> Laboratorio JPA</a></li></ol></li><li class="chapter-item expanded "><a href="06-ejb.html"><strong aria-hidden="true">7.2.</strong> Enterprise JavaBeans (EJB) - Part 1</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 7️⃣ 📗</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="06-ejb.html"><strong aria-hidden="true">8.1.</strong> EJB - Part 2</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="07-ejb-lab.html"><strong aria-hidden="true">8.1.1.</strong> Laboratorio EJB (Esercizio 0)</a></li></ol></li><li class="chapter-item expanded "><a href="07-jms.html"><strong aria-hidden="true">8.2.</strong> Java Message Service - Part 1</a></li><li class="chapter-item expanded "><a href="06-ejb.html"><strong aria-hidden="true">8.3.</strong> JMS - Part 2</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 8️⃣ 📗</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="07-ejb-lab.html"><strong aria-hidden="true">9.1.</strong> Laboratorio EJB</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="08-jms-lab.html"><strong aria-hidden="true">9.1.1.</strong> JMS Lab</a></li></ol></li><li class="chapter-item expanded "><a href="08-ws.html"><strong aria-hidden="true">9.2.</strong> Java Web Services (WS) Parte 1</a></li><li class="chapter-item expanded "><a href="08-ws.html"><strong aria-hidden="true">9.3.</strong> Java WS Parte 2</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> 9️⃣ 📗</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="09-ws-lab.html"><strong aria-hidden="true">10.1.</strong> Laboratorio Java WS</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.2.</strong> Laboratorio J2EE Step-by-step</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.3.</strong> Introduzione al Cloud Computing</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> 1️⃣0️⃣</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">11.1.</strong> From J2EE to Spring Framework (Teoria)</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.2.</strong> From J2EE to Spring Framework (Pratica)</div></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
