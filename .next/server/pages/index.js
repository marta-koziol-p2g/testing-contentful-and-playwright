"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(959);
// EXTERNAL MODULE: ./components/more-stories.js + 1 modules
var more_stories = __webpack_require__(9202);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(6734);
// EXTERNAL MODULE: ./components/date.js
var components_date = __webpack_require__(2419);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(3483);
;// CONCATENATED MODULE: ./components/hero-post.js





function HeroPost({ title , coverImage , date , excerpt , author , slug  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    slug: slug,
                    url: coverImage.url
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "mb-4 text-4xl lg:text-6xl leading-tight",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${slug}`,
                                    className: "hover:underline",
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-4 md:mb-0 text-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg leading-relaxed mb-4",
                                children: excerpt
                            }),
                            author && /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                name: author.name,
                                picture: author.picture
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
;// CONCATENATED MODULE: ./components/intro.js


function Intro() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
                children: "Blog."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                className: "text-center md:text-left text-lg mt-5 md:pl-8",
                children: [
                    "A statically generated blog example using",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://nextjs.org/",
                        className: "underline hover:text-success duration-200 transition-colors",
                        children: "Next.js"
                    }),
                    " ",
                    "and",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: constants/* CMS_URL */.oc,
                        className: "underline hover:text-success duration-200 transition-colors",
                        children: constants/* CMS_NAME */.yf
                    }),
                    "."
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(654);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.js









function Index({ preview , allPosts  }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            preview: preview,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Next.js Blog Example with ",
                            constants/* CMS_NAME */.yf
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Intro, {}),
                        heroPost && /*#__PURE__*/ jsx_runtime_.jsx(HeroPost, {
                            title: heroPost.title,
                            coverImage: heroPost.coverImage,
                            date: heroPost.date,
                            author: heroPost.author,
                            slug: heroPost.slug,
                            excerpt: heroPost.excerpt
                        }),
                        morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    });
}
async function getStaticProps({ preview =false  }) {
    const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview) ?? [];
    return {
        props: {
            preview,
            allPosts
        }
    };
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,485], () => (__webpack_exec__(7907)));
module.exports = __webpack_exports__;

})();