"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Style = __importStar(require("./styledComponents/ImageWriteStyle"));
const react_query_1 = require("react-query");
const apis_1 = require("./api/apis");
const icon_delete_image_svg_1 = __importDefault(require("../assets/icons/icon-delete-image.svg"));
const icon_add_lightgray_svg_1 = __importDefault(require("../assets/icons/icon-add-lightgray.svg"));
const ImageWrite = ({ showPostImage, data, setData }) => {
    // 이미지 등록 mutation
    const { mutate } = (0, react_query_1.useMutation)(imgFormData => (0, apis_1.postImage)(imgFormData), {
        onSuccess: data => {
            console.log('게시글 이미지 등록에 성공했습니다.');
            setData(prevFormData => {
                const updatedFormData = Object.assign(Object.assign({}, prevFormData), { images: [...prevFormData.images, data] });
                return updatedFormData;
            });
        },
        onError: error => {
            console.error(error);
        }
    });
    // 이미지 추가
    const handleAddImage = e => {
        const imgFormData = new FormData();
        const img = e.target.files[0];
        imgFormData.append('img', img);
        mutate(imgFormData);
    };
    // 이미지 삭제
    const handleImageDelete = index => {
        setData(prevData => {
            const updatedImages = [...prevData.images];
            updatedImages.splice(index, 1);
            return Object.assign(Object.assign({}, prevData), { images: updatedImages });
        });
    };
    return ((0, jsx_runtime_1.jsx)(Style.ImageContainer, { children: showPostImage && ((0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "file-upload" }, { children: [data.images.length > 0 &&
                    data.images.map((image, index) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "file-upload-preview" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: image.img_path, alt: `이미지` + index }), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "delete-btn", onClick: () => handleImageDelete(index) }, { children: (0, jsx_runtime_1.jsx)("img", { src: icon_delete_image_svg_1.default, alt: "\uC774\uBBF8\uC9C0 \uC0AD\uC81C" }) }))] }), index))), (0, jsx_runtime_1.jsxs)("label", Object.assign({ htmlFor: "file", className: "file-upload-btn" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "file", name: "file", id: "file", multiple: true, accept: "image/*", onChange: e => handleAddImage(e) }), (0, jsx_runtime_1.jsx)("img", { src: icon_add_lightgray_svg_1.default, alt: "" }), "\uC0AC\uC9C4 \uCD94\uAC00"] }))] }))) }));
};
exports.default = ImageWrite;
