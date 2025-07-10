/** 防抖 */
const debounce = (fn, wait = 100) => {
  let timeout
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(), wait);
  };
};

function init() {
  const field = document.getElementById(
    "tsd-search-input",
  )

  const results = document.getElementById("tsd-search-results");

  if (field) {
    field.addEventListener(
      "input",
      debounce(() => {
        const searchText = field.value.trim();
        const result = onSearch(searchText)
        removeResults(results)
        updateResults(results, result, searchText);
      }, 200),
    );

  }
  let dialog = document.getElementById("tsd-search");

  function openSearch() {
    setUpModal(dialog, { closeOnClick: true });
    openModal(dialog);
  }

  const objectElement = document.getElementById('content');

  objectElement.addEventListener('load', (event) => {
    const links = objectElement.contentDocument.body.querySelectorAll('a')
    links.forEach(link => {
      let src = link.getAttribute("href")
      if (src.indexOf('http') === 0) {
        link.setAttribute('target', '_blank')
      }
      link.addEventListener('click', function (event) {
        let src = link.getAttribute("href")
        if (src.indexOf('http') !== 0) {
          src = src.replace('../', '')
          if (src.indexOf('/') < 0) {
            const _data = document.getElementById("content").getAttribute('data')
            const temp = _data.split('/')
            if (temp.length > 0) {
              let preUrl = ''
              for (let i = 0; i < temp.length - 1; i++) {
                preUrl += temp[i] + '/'
              }
              src = preUrl + src
            }
          }
          event.preventDefault(); // 阻止默认行为
          // 可以在这里添加其他逻辑，比如处理点击事件
          link.setAttribute("data-type", src)
          selectItem(link)
          scrollIntoView(src)
          document.getElementById("content").setAttribute("data", src)
        }
      });
    });
  });


  let items = document.getElementsByTagName("a");
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
      let src = items[i].getAttribute("data-type")
      selectItem(items[i])
      document.getElementById("content").setAttribute("data", src)
      closeModal(dialog)
    }
  }
}

/** 清除已有结果 */
function removeResults(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

const SPECIAL_HTML = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#039;",
  '"': "&quot;",
};

function escapeHtml(text) {
  return text.replace(
    /[&<>"'"]/g,
    (match) => SPECIAL_HTML[match],
  );
}


function onSearch(key) {
  const list = document.getElementById("sidebar-list");
  let result = []
  if (list) {
    const uls = list.getElementsByTagName("ul")
    for (let i = 0; i < uls.length; i++) {
      const ul = uls[i];
      if (!ul) continue
      const lis = ul.getElementsByTagName('li');
      for (let j = 0; j < lis.length; j++) {
        const li = lis[j];
        if (!li) continue

        if (li.textContent?.toLocaleLowerCase().includes(key.trim().toLocaleLowerCase())) {
          const a = li.getElementsByTagName('a');
          result.push({
            section: i,
            index: j,
            content: li.textContent || '',
            href: a[0].getAttribute("data-type"),
          })
        }
      }
    }
  }
  return result
}

function highlightMatches(text, search) {
  if (search === "") {
    return text;
  }

  const lowerText = text.toLocaleLowerCase();
  const lowerSearch = search.toLocaleLowerCase();

  const parts = [];
  let lastIndex = 0;
  let index = lowerText.indexOf(lowerSearch);
  while (index != -1) {
    parts.push(
      escapeHtml(text.substring(lastIndex, index)),
      `<mark>${escapeHtml(
        text.substring(index, index + lowerSearch.length),
      )
      }</mark>`,
    );

    lastIndex = index + lowerSearch.length;
    index = lowerText.indexOf(lowerSearch, lastIndex);
  }

  parts.push(escapeHtml(text.substring(lastIndex)));

  return parts.join("");
}

let currentItem = undefined

function updateResults(
  results,
  state,
  searchText,
) {
  if (state.length === 0) return;

  const showData = Math.min(10, state.length);
  for (let i = 0; i < showData; i++) {
    const row = state[i];
    const label = row.content
    const icon =
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="tsd-kind-icon" aria-label="${label}"><use href="#icon-${row.icon || row.kind
      }"></use></svg>`;

    // 高亮输入部分
    let name = highlightMatches(label, searchText);
    if (globalThis.DEBUG_SEARCH_WEIGHTS) {
      name += ` (score: ${res[i].score.toFixed(2)})`;
    }
    if (row.parent) {
      name = `<span class="parent">
                ${highlightMatches(label, searchText)}.</span>${name}`;
    }

    const item = document.createElement("li");
    item.id = `tsd-search:${row.section}-${i}`;
    item.role = "option";
    item.ariaSelected = "false";
    item.classList.value = row.classes ?? "";

    const anchor = document.createElement("a");
    // 添加搜索结果列表
    anchor.tabIndex = -1;
    anchor.innerHTML = icon + `<span class="text">${name}</span>`;
    anchor.onclick = function () {
      let src = row.href
      document.getElementById("content").setAttribute("data", src)
      let dialog = document.getElementById("tsd-search");
      closeModal(dialog)
      scrollIntoView(src)
    }
    item.append(anchor);

    results.appendChild(item);
  }
}

function selectItem(a) {
  if (currentItem) {
    currentItem.setAttribute("class", "")
  }
  currentItem = a
  currentItem.setAttribute("class", "current")
}

function scrollIntoView(src) {
  let lis = document.querySelectorAll("li");
  for (const li of lis) {
    if (li.children.length === 1) {
      if (li.children[0].getAttribute('data-type') === src) {
        // 列表滚动到指定位置
        li.children[0].scrollIntoView({
          // behavior: 'smooth',
          block: "center",
          inline: "center",
        })
        selectItem(li.children[0])
        break
      }
    }

  }
}
