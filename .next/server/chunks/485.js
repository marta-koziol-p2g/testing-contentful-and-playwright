"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 6734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentful_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9383);


function Avatar({ name , picture  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-12 h-12 mr-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contentful_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    src: picture.url,
                    layout: "fill",
                    className: "rounded-full",
                    alt: name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-xl font-bold",
                children: name
            })
        ]
    });
}


/***/ }),

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-5",
        children: children
    });
}


/***/ }),

/***/ 9383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const contentfulLoader = ({ src , width , quality  })=>{
    return `${src}?w=${width}&q=${quality || 75}`;
};
const ContentfulImage = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        loader: contentfulLoader,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentfulImage);


/***/ }),

/***/ 3483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoverImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentful_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9383);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




function CoverImage({ title , url , slug  }) {
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contentful_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        width: 2000,
        height: 1000,
        alt: `Cover Image for ${title}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("shadow-small", {
            "hover:shadow-medium transition-shadow duration-200": slug
        }),
        src: url
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sm:mx-0",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/posts/${slug}`,
            "aria-label": title,
            children: image
        }) : image
    });
}


/***/ }),

/***/ 2419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DateComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function DateComponent({ dateString  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(dateString), "LLLL	d, yyyy")
    });
}


/***/ }),

/***/ 654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(959);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
;// CONCATENATED MODULE: ./components/alert.js




function Alert({ preview  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("border-b", {
            "bg-accent-7 border-accent-7 text-white": preview,
            "bg-accent-1 border-accent-2": !preview
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-2 text-center text-sm",
                children: preview ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "This is page is a preview.",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/api/exit-preview",
                            className: "underline hover:text-cyan duration-200 transition-colors",
                            children: "Click here"
                        }),
                        " ",
                        "to exit preview mode."
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "The source code for this blog is",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: `https://github.com/vercel/next.js/tree/canary/examples/${constants/* EXAMPLE_PATH */.Ys}`,
                            className: "underline hover:text-success duration-200 transition-colors",
                            children: "available on GitHub"
                        }),
                        "."
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-accent-1 border-t border-accent-2",
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-28 flex flex-col lg:flex-row items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
                        children: "Statically Generated with Next.js."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://nextjs.org/docs/basic-features/pages",
                                className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
                                children: "Read Documentation"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `https://github.com/vercel/next.js/tree/canary/examples/${constants/* EXAMPLE_PATH */.Ys}`,
                                className: "mx-3 font-bold hover:underline",
                                children: "View on GitHub"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/meta.js



function Meta() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: `A statically generated blog example using Next.js and ${constants/* CMS_NAME */.yf}.`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: constants/* HOME_OG_IMAGE_URL */.vC
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout.js




function Layout({ preview , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Alert, {
                        preview: preview
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 9202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MoreStories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(6734);
// EXTERNAL MODULE: ./components/date.js
var components_date = __webpack_require__(2419);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(3483);
;// CONCATENATED MODULE: ./components/post-preview.js





function PostPreview({ title , coverImage , date , excerpt , author , slug  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    slug: slug,
                    url: coverImage.url
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-3xl mb-3 leading-snug",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/posts/${slug}`,
                    className: "hover:underline",
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-lg mb-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                    dateString: date
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-lg leading-relaxed mb-4",
                children: excerpt
            }),
            author && /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                name: author.name,
                picture: author.picture
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/more-stories.js


function MoreStories({ posts  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
                children: "More Stories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(PostPreview, {
                        title: post.title,
                        coverImage: post.coverImage,
                        date: post.date,
                        author: post.author,
                        slug: post.slug,
                        excerpt: post.excerpt
                    }, post.slug))
            })
        ]
    });
}


/***/ }),

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DT": () => (/* binding */ getAllPostsForHome),
/* harmony export */   "ds": () => (/* binding */ getPostAndMorePosts),
/* harmony export */   "h9": () => (/* binding */ getAllPostsWithSlug)
/* harmony export */ });
/* unused harmony export getPreviewPostBySlug */
const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;
async function fetchGraphQL(query, preview = false) {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
            query
        })
    }).then((response)=>response.json());
}
function extractPost(fetchResponse) {
    return fetchResponse?.data?.postCollection?.items?.[0];
}
function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.postCollection?.items;
}
async function getPreviewPostBySlug(slug) {
    const entry = await fetchGraphQL(`query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, true);
    return extractPost(entry);
}
async function getAllPostsWithSlug() {
    const entries = await fetchGraphQL(`query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractPostEntries(entries);
}
async function getAllPostsForHome(preview) {
    const entries = await fetchGraphQL(`query {
      postCollection(order: date_DESC, preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, preview);
    return extractPostEntries(entries);
}
async function getPostAndMorePosts(slug, preview) {
    const entry = await fetchGraphQL(`query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? "true" : "false"}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, preview);
    const entries = await fetchGraphQL(`query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${preview ? "true" : "false"}, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, preview);
    return {
        post: extractPost(entry),
        morePosts: extractPostEntries(entries)
    };
}


/***/ }),

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ys": () => (/* binding */ EXAMPLE_PATH),
/* harmony export */   "oc": () => (/* binding */ CMS_URL),
/* harmony export */   "vC": () => (/* binding */ HOME_OG_IMAGE_URL),
/* harmony export */   "yf": () => (/* binding */ CMS_NAME)
/* harmony export */ });
const EXAMPLE_PATH = "cms-contentful";
const CMS_NAME = "Contentful";
const CMS_URL = "https://www.contentful.com";
const HOME_OG_IMAGE_URL = "https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Contentful**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIzMiI%2BCiAgPHBhdGggZmlsbD0iI0ZGRDg1RiIgZD0iTTkuNyAyMi4zQzggMjAuNyA3IDE4LjUgNyAxNnMxLTQuNyAyLjYtNi4zYzEuNC0xLjQgMS40LTMuNiAwLTVzLTMuNi0xLjQtNSAwQzEuOCA3LjYgMCAxMS42IDAgMTZzMS44IDguNCA0LjcgMTEuM2MxLjQgMS40IDMuNiAxLjQgNSAwIDEuMy0xLjQgMS4zLTMuNiAwLTV6Ij48L3BhdGg%2BCiAgPHBhdGggZmlsbD0iIzNCQjRFNyIgZD0iTTkuNyA5LjdDMTEuMyA4IDEzLjUgNyAxNiA3czQuNyAxIDYuMyAyLjZjMS40IDEuNCAzLjYgMS40IDUgMHMxLjQtMy42IDAtNUMyNC40IDEuOCAyMC40IDAgMTYgMFM3LjYgMS44IDQuNyA0LjdjLTEuNCAxLjQtMS40IDMuNiAwIDUgMS40IDEuMyAzLjYgMS4zIDUgMHoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUQ1QzY4IiBkPSJNMjIuMyAyMi4zQzIwLjcgMjQgMTguNSAyNSAxNiAyNXMtNC43LTEtNi4zLTIuNmMtMS40LTEuNC0zLjYtMS40LTUgMHMtMS40IDMuNiAwIDVDNy42IDMwLjIgMTEuNiAzMiAxNiAzMnM4LjQtMS44IDExLjMtNC43YzEuNC0xLjQgMS40LTMuNiAwLTUtMS40LTEuMy0zLjYtMS4zLTUgMHoiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI3LjIiIGN5PSI3LjIiIHI9IjMuNSIgZmlsbD0iIzMwOEJDNSI%2BPC9jaXJjbGU%2BCiAgPGNpcmNsZSBjeD0iNy4yIiBjeT0iMjQuOCIgcj0iMy41IiBmaWxsPSIjRDU0NjVGIj48L2NpcmNsZT4KPC9zdmc%2B";


/***/ })

};
;