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
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;

/**
 * Registers and creates block
 */

registerBlockType('wesrom/testimonial-slider', {
	title: __('Testimonial Slider', 'wesrom'),
	icon: 'testimonial',
	category: 'common',
	/**
  * Object with all binding elements between the view HTML and the functions
  * It lets you bind data from DOM elements and storage attributes
  */
	attributes: {
		testimonial_slider_title: {
			type: 'string'
		},
		slide_1_testimonial: {
			type: 'string'
		},
		slide_1_name: {
			type: 'string'
		},
		slide_1_position: {
			type: 'string'
		},
		slide_2_testimonial: {
			type: 'string'
		},
		slide_2_name: {
			type: 'string'
		},
		slide_2_position: {
			type: 'string'
		},
		slide_3_testimonial: {
			type: 'string'
		},
		slide_3_name: {
			type: 'string'
		},
		slide_3_position: {
			type: 'string'
		},
		slide_4_testimonial: {
			type: 'string'
		},
		slide_4_name: {
			type: 'string'
		},
		slide_4_position: {
			type: 'string'
		},
		slide_5_testimonial: {
			type: 'string'
		},
		slide_5_name: {
			type: 'string'
		},
		slide_5_position: {
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
			'fragment',
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{
						title: 'Slide 1',
						initialOpen: 'true'
					},
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextareaControl, {
							label: 'Testimonial',
							value: props.attributes.slide_1_testimonial,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_1_testimonial: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Name',
							value: props.attributes.slide_1_name,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_1_name: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Position',
							value: props.attributes.slide_1_position,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_1_position: content });
							}
						})
					)
				),
				wp.element.createElement(
					PanelBody,
					{
						title: 'Slide 2',
						initialOpen: 'false'
					},
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextareaControl, {
							label: 'Testimonial',
							value: props.attributes.slide_2_testimonial,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_2_testimonial: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Name',
							value: props.attributes.slide_2_name,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_2_name: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Position',
							value: props.attributes.slide_2_position,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_2_position: content });
							}
						})
					)
				),
				wp.element.createElement(
					PanelBody,
					{
						title: 'Slide 3',
						initialOpen: 'false'
					},
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextareaControl, {
							label: 'Testimonial',
							value: props.attributes.slide_3_testimonial,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_3_testimonial: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Name',
							value: props.attributes.slide_3_name,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_3_name: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Position',
							value: props.attributes.slide_3_position,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_3_position: content });
							}
						})
					)
				),
				wp.element.createElement(
					PanelBody,
					{
						title: 'Slide 4',
						initialOpen: 'false'
					},
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextareaControl, {
							label: 'Testimonial',
							value: props.attributes.slide_4_testimonial,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_4_testimonial: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Name',
							value: props.attributes.slide_4_name,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_4_name: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Position',
							value: props.attributes.slide_4_position,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_4_position: content });
							}
						})
					)
				),
				wp.element.createElement(
					PanelBody,
					{
						title: 'Slide 5',
						initialOpen: 'false'
					},
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextareaControl, {
							label: 'Testimonial',
							value: props.attributes.slide_5_testimonial,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_5_testimonial: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Name',
							value: props.attributes.slide_5_name,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_5_name: content });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(TextControl, {
							label: 'Position',
							value: props.attributes.slide_5_position,
							onChange: function onChange(content) {
								return props.setAttributes({ slide_5_position: content });
							}
						})
					)
				)
			),
			wp.element.createElement(
				'div',
				{
					id: 'testimonial-slider-block',
					className: props.className
				},
				wp.element.createElement(RichText, {
					tagName: 'h2',
					className: 'has-very-large-font-size',
					value: props.attributes.testimonial_slider_title,
					onChange: function onChange(content) {
						return props.setAttributes({ testimonial_slider_title: content });
					},
					placeholder: __('In Our Clients’ Words', 'wesrom')
				}),
				wp.element.createElement(
					'div',
					{ 'class': 'testimonial-slides has-medium-font-size' },
					wp.element.createElement(
						'div',
						{ 'class': 'testimonial-slide active' },
						wp.element.createElement(
							'blockquote',
							null,
							wp.element.createElement(
								'p',
								null,
								'Working with Wesrom Marketing has been such a cool experience. We had sales meetings booked after the first hour. By the end of the first week my calendar was full for the following week. Their results have been better than I could have imagined and I was also educated during the process.'
							),
							wp.element.createElement(
								'figcaption',
								null,
								'EMILY SWANK',
								wp.element.createElement(
									'cite',
									null,
									'CEO, Autism Assistant'
								)
							)
						)
					)
				)
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
				'h2',
				{ 'class': 'has-very-large-font-size form-title' },
				wp.element.createElement(RichText.Content, { tag: 'h2', value: props.attributes.testimonial_slider_title })
			),
			wp.element.createElement(
				'div',
				{ 'class': 'testimonial-slides has-medium-font-size' },
				wp.element.createElement('span', { 'class': 'prev-button' }),
				wp.element.createElement('span', { 'class': 'next-button' }),
				wp.element.createElement(
					'div',
					{ 'class': 'testimonial-slide left' },
					wp.element.createElement(
						'blockquote',
						null,
						wp.element.createElement(
							'p',
							null,
							props.attributes.slide_1_testimonial
						),
						wp.element.createElement(
							'figcaption',
							null,
							props.attributes.slide_1_name,
							wp.element.createElement(
								'cite',
								null,
								props.attributes.slide_1_position
							)
						)
					)
				),
				wp.element.createElement(
					'div',
					{ 'class': 'testimonial-slide active' },
					wp.element.createElement(
						'blockquote',
						null,
						wp.element.createElement(
							'p',
							null,
							props.attributes.slide_2_testimonial
						),
						wp.element.createElement(
							'figcaption',
							null,
							props.attributes.slide_2_name,
							wp.element.createElement(
								'cite',
								null,
								props.attributes.slide_2_position
							)
						)
					)
				),
				wp.element.createElement(
					'div',
					{ 'class': 'testimonial-slide right' },
					wp.element.createElement(
						'blockquote',
						null,
						wp.element.createElement(
							'p',
							null,
							props.attributes.slide_3_testimonial
						),
						wp.element.createElement(
							'figcaption',
							null,
							props.attributes.slide_3_name,
							wp.element.createElement(
								'cite',
								null,
								props.attributes.slide_3_position
							)
						)
					)
				),
				wp.element.createElement(
					'div',
					{ 'class': 'testimonial-slide' },
					wp.element.createElement(
						'blockquote',
						null,
						wp.element.createElement(
							'p',
							null,
							props.attributes.slide_4_testimonial
						),
						wp.element.createElement(
							'figcaption',
							null,
							props.attributes.slide_4_name,
							wp.element.createElement(
								'cite',
								null,
								props.attributes.slide_4_position
							)
						)
					)
				),
				wp.element.createElement(
					'div',
					{ 'class': 'testimonial-slide' },
					wp.element.createElement(
						'blockquote',
						null,
						wp.element.createElement(
							'p',
							null,
							props.attributes.slide_5_testimonial
						),
						wp.element.createElement(
							'figcaption',
							null,
							props.attributes.slide_5_name,
							wp.element.createElement(
								'cite',
								null,
								props.attributes.slide_5_position
							)
						)
					)
				)
			)
		);
	}
});

/***/ })
/******/ ]);