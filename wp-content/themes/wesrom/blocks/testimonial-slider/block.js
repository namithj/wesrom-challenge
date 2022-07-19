/** 
 * Simple dynamic block sample
 * 
 * Creates a block that doesn't render the save side, because it's rendered on PHP
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { TextControl, TextareaControl, Panel, PanelBody, PanelRow } = wp.components;

/**
 * Registers and creates block
 */
registerBlockType(
	'wesrom/testimonial-slider',
	{
		title: __('Testimonial Slider', 'wesrom'),
		icon: 'testimonial',
		category: 'common',
		/**
		 * Object with all binding elements between the view HTML and the functions
		 * It lets you bind data from DOM elements and storage attributes
		 */
		attributes: {
			testimonial_slider_title: {
				type: 'string',
			},
			slide_1_testimonial: {
				type: 'string',
			},
			slide_1_name: {
				type: 'string',
			},
			slide_1_position: {
				type: 'string',
			},
			slide_2_testimonial: {
				type: 'string',
			},
			slide_2_name: {
				type: 'string',
			},
			slide_2_position: {
				type: 'string',
			},
			slide_3_testimonial: {
				type: 'string',
			},
			slide_3_name: {
				type: 'string',
			},
			slide_3_position: {
				type: 'string',
			},
			slide_4_testimonial: {
				type: 'string',
			},
			slide_4_name: {
				type: 'string',
			},
			slide_4_position: {
				type: 'string',
			},
			slide_5_testimonial: {
				type: 'string',
			},
			slide_5_name: {
				type: 'string',
			},
			slide_5_position: {
				type: 'string',
			},
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
		edit(props) {
			return (
				<fragment>
					<InspectorControls>
						<PanelBody
							title="Slide 1"
							initialOpen="true"
						>
							<PanelRow>
								<TextareaControl						
									label="Testimonial"
									value={ props.attributes.slide_1_testimonial }
									onChange={ ( content ) => props.setAttributes( {slide_1_testimonial: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Name"
									value={ props.attributes.slide_1_name }
									onChange={ ( content ) => props.setAttributes( {slide_1_name: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Position"
									value={ props.attributes.slide_1_position }
									onChange={ ( content ) => props.setAttributes( {slide_1_position: content} ) }
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody
							title="Slide 2"
							initialOpen="false"
						>
							<PanelRow>
								<TextareaControl						
									label="Testimonial"
									value={ props.attributes.slide_2_testimonial }
									onChange={ ( content ) => props.setAttributes( {slide_2_testimonial: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Name"
									value={ props.attributes.slide_2_name }
									onChange={ ( content ) => props.setAttributes( {slide_2_name: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Position"
									value={ props.attributes.slide_2_position }
									onChange={ ( content ) => props.setAttributes( {slide_2_position: content} ) }
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody
							title="Slide 3"
							initialOpen="false"
						>
							<PanelRow>
								<TextareaControl						
									label="Testimonial"
									value={ props.attributes.slide_3_testimonial }
									onChange={ ( content ) => props.setAttributes( {slide_3_testimonial: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Name"
									value={ props.attributes.slide_3_name }
									onChange={ ( content ) => props.setAttributes( {slide_3_name: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Position"
									value={ props.attributes.slide_3_position }
									onChange={ ( content ) => props.setAttributes( {slide_3_position: content} ) }
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody
							title="Slide 4"
							initialOpen="false"
						>
							<PanelRow>
								<TextareaControl						
									label="Testimonial"
									value={ props.attributes.slide_4_testimonial }
									onChange={ ( content ) => props.setAttributes( {slide_4_testimonial: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Name"
									value={ props.attributes.slide_4_name }
									onChange={ ( content ) => props.setAttributes( {slide_4_name: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Position"
									value={ props.attributes.slide_4_position }
									onChange={ ( content ) => props.setAttributes( {slide_4_position: content} ) }
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody
							title="Slide 5"
							initialOpen="false"
						>
							<PanelRow>
								<TextareaControl						
									label="Testimonial"
									value={ props.attributes.slide_5_testimonial }
									onChange={ ( content ) => props.setAttributes( {slide_5_testimonial: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Name"
									value={ props.attributes.slide_5_name }
									onChange={ ( content ) => props.setAttributes( {slide_5_name: content} ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl						
									label="Position"
									value={ props.attributes.slide_5_position }
									onChange={ ( content ) => props.setAttributes( {slide_5_position: content} ) }
								/>
							</PanelRow>
						</PanelBody>
					</InspectorControls>
					<div
						id="testimonial-slider-block"
						className={props.className}
					>
						<RichText						
							tagName="h2"
							className="has-very-large-font-size"
							value={ props.attributes.testimonial_slider_title }
							onChange={ ( content ) => props.setAttributes( {testimonial_slider_title: content} ) }
							placeholder={ __( 'In Our Clients’ Words', 'wesrom' ) }
						/>
						<div class="testimonial-slides has-medium-font-size">
							<div class="testimonial-slide active">
								<blockquote>
									<p>Working with Wesrom Marketing has been such a cool experience. We had sales meetings booked after the first hour. By the end of the first week my calendar was full for the following week. Their results have been better than I could have imagined and I was also educated during the process.</p>
									<figcaption>EMILY SWANK<cite>CEO, Autism Assistant</cite></figcaption>
								</blockquote>
							</div>
						</div>
					</div>
				</fragment>
			)
		},

		/**
		 * save function
		 * 
		 * @param object props Let's you bind markup and attributes as well as other controls
		 * @return JSX ECMAScript Markup for the site
		 */
		save(props) {
			return (
				<div
					className={props.className}
				>
					<h2 class="has-very-large-font-size form-title">
						<RichText.Content tag={'h2'} value={props.attributes.testimonial_slider_title} />
					</h2>
					<div class="testimonial-slides has-medium-font-size">
						<span class="prev-button"></span>
						<span class="next-button"></span>
						<div class="testimonial-slide left">
							<blockquote>
								<p>{props.attributes.slide_1_testimonial}</p>
								<figcaption>{props.attributes.slide_1_name}<cite>{props.attributes.slide_1_position}</cite></figcaption>
							</blockquote>
						</div>
						<div class="testimonial-slide active">
							<blockquote>
								<p>{props.attributes.slide_2_testimonial}</p>
								<figcaption>{props.attributes.slide_2_name}<cite>{props.attributes.slide_2_position}</cite></figcaption>
							</blockquote>
						</div>
						<div class="testimonial-slide right">
							<blockquote>
								<p>{props.attributes.slide_3_testimonial}</p>
								<figcaption>{props.attributes.slide_3_name}<cite>{props.attributes.slide_3_position}</cite></figcaption>
							</blockquote>
						</div>
						<div class="testimonial-slide">
							<blockquote>
								<p>{props.attributes.slide_4_testimonial}</p>
								<figcaption>{props.attributes.slide_4_name}<cite>{props.attributes.slide_4_position}</cite></figcaption>
							</blockquote>
						</div>
						<div class="testimonial-slide">
							<blockquote>
								<p>{props.attributes.slide_5_testimonial}</p>
								<figcaption>{props.attributes.slide_5_name}<cite>{props.attributes.slide_5_position}</cite></figcaption>
							</blockquote>
						</div>
					</div>
				</div>
			)
		},
	}
);
