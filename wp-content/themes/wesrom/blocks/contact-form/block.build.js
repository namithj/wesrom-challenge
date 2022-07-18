/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/** 
 * Simple dynamic block sample
 * 
 * Creates a block that doesn't render the save side, because it's rendered on PHP
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;

/**
 * Registers and creates block
 */

registerBlockType('wesrom/contact-form', {
	title: __('Contact Form', 'wesrom'),
	icon: 'forms',
	category: 'common',
	/**
  * Object with all binding elements between the view HTML and the functions
  * It lets you bind data from DOM elements and storage attributes
  */
	attributes: {
		contact_form_title: {
			type: 'string'
		},
		contact_form_description: {
			type: 'string'
		},
		submit_label: {
			type: 'string'
		},
		disclaimer_text: {
			type: 'string'
		}
	},

	/**
  * edit function
  * 
  * Makes the markup for the editor interface.
  * 
  * @param object props Let's you bind markup and attributes as well as other controls
  * 
  * @return JSX ECMAScript Markup for the editor 
  */
	edit: function edit(props) {
		return wp.element.createElement(
			'div',
			{
				id: 'contact-form-block',
				className: props.className
			},
			wp.element.createElement(RichText, {
				tagName: 'h1',
				className: 'has-extra-large-font-size',
				value: props.attributes.contact_form_title,
				onChange: function onChange(content) {
					return props.setAttributes({ contact_form_title: content });
				},
				placeholder: __('Engage With an Expert', 'wesrom')
			}),
			wp.element.createElement(RichText, {
				tagName: 'p',
				className: 'has-medium-font-size',
				value: props.attributes.contact_form_description,
				onChange: function onChange(content) {
					return props.setAttributes({ contact_form_description: content });
				},
				placeholder: __('To discuss how our digital marketing agency can help you convert leads into customers.', 'wesrom')
			}),
			wp.element.createElement(
				'div',
				{ 'class': 'form' },
				wp.element.createElement(
					'label',
					{ 'class': 'left' },
					'Full Name',
					wp.element.createElement('input', { type: 'text', required: true, placeholder: 'Full Name*' })
				),
				wp.element.createElement(
					'label',
					{ 'class': 'right' },
					'Email',
					wp.element.createElement('input', { type: 'email', required: true, placeholder: 'Email*' })
				),
				wp.element.createElement(
					'label',
					{ 'class': 'left' },
					'Phone Number',
					wp.element.createElement('input', { type: 'phone', placeholder: 'Phone Number' })
				),
				wp.element.createElement(
					'label',
					{ 'class': 'right' },
					'Website',
					wp.element.createElement('input', { type: 'text', placeholder: 'Website' })
				),
				wp.element.createElement(
					'label',
					null,
					'Further Details',
					wp.element.createElement('textarea', { placeholder: 'Further Details' })
				),
				wp.element.createElement(RichText, {
					tagName: 'button',
					className: 'has-white-color has-blue-background-color has-text-color has-background wp-block-button__link',
					value: props.attributes.submit_label,
					onChange: function onChange(content) {
						return props.setAttributes({ submit_label: content });
					},
					placeholder: 'SUBMIT REQUEST'
				}),
				wp.element.createElement(RichText, {
					tagName: 'p',
					className: 'has-small-font-size form-disclaimer',
					value: props.attributes.disclaimer_text,
					onChange: function onChange(content) {
						return props.setAttributes({ disclaimer_text: content });
					},
					placeholder: '*By registering, you confirm that you agree to the storing and processing of your personal data by Wesrom Digital as described in the Privacy Policy.'
				}),
				wp.element.createElement('div', { 'class': 'clear' })
			)
		);
	},


	/**
  * save function
  * 
  * @param object props Let's you bind markup and attributes as well as other controls
  * @return JSX ECMAScript Markup for the site
  */
	save: function save(props) {
		return wp.element.createElement(
			'div',
			{
				className: props.className
			},
			wp.element.createElement(
				'h1',
				{ 'class': 'has-extra-large-font-size form-title' },
				wp.element.createElement(RichText.Content, { tag: 'h1', value: props.attributes.contact_form_title })
			),
			wp.element.createElement(
				'p',
				{ 'class': 'has-medium-font-size form-description' },
				wp.element.createElement(RichText.Content, { tag: 'p', value: props.attributes.contact_form_description })
			),
			wp.element.createElement(
				'form',
				{ 'class': 'form' },
				wp.element.createElement(
					'label',
					{ 'class': 'left' },
					'Full Name',
					wp.element.createElement('input', { type: 'text', required: true, placeholder: 'Full Name*' })
				),
				wp.element.createElement(
					'label',
					{ 'class': 'right' },
					'Email',
					wp.element.createElement('input', { type: 'email', required: true, placeholder: 'Email*' })
				),
				wp.element.createElement(
					'label',
					{ 'class': 'left' },
					'Phone Number',
					wp.element.createElement('input', { type: 'phone', placeholder: 'Phone Number' })
				),
				wp.element.createElement(
					'label',
					{ 'class': 'right' },
					'Website',
					wp.element.createElement('input', { type: 'text', placeholder: 'Website' })
				),
				wp.element.createElement(
					'label',
					null,
					'Further Details',
					wp.element.createElement('textarea', { placeholder: 'Further Details' })
				),
				wp.element.createElement('input', { type: 'submit', 'class': 'has-white-color has-blue-background-color has-text-color has-background wp-block-button__link',
					value: props.attributes.submit_label
				}),
				wp.element.createElement(
					'p',
					{ 'class': 'has-small-font-size form-disclaimer' },
					wp.element.createElement(RichText.Content, { tag: 'p', value: props.attributes.disclaimer_text })
				),
				wp.element.createElement('div', { 'class': 'clear' })
			)
		);
	}
});

/***/ })
/******/ ]);