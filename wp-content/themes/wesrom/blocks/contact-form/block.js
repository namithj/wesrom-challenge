/** 
 * Simple dynamic block sample
 * 
 * Creates a block that doesn't render the save side, because it's rendered on PHP
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Registers and creates block
 */
registerBlockType(
    'wesrom/contact-form',
    {
	    title: __('Contact Form', 'wesrom'),
	    icon: 'forms',
	    category: 'common',
        /**
         * Object with all binding elements between the view HTML and the functions
         * It lets you bind data from DOM elements and storage attributes
         */
        attributes: {
            contact_form_title: {
                type: 'string',
            },
            contact_form_description: {
                type: 'string',
            },
            submit_label: {
                type: 'string',
            },
            disclaimer_text: {
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
        edit ( props ) {             
            return (
                <div
					id="contact-form-block"
					className={props.className}
				>
					<RichText						
						tagName="h1"
						className="has-extra-large-font-size"
						value={ props.attributes.contact_form_title }
						onChange={ ( content ) => props.setAttributes( {contact_form_title: content} ) }
						placeholder={ __( 'Engage With an Expert', 'wesrom' ) }
					/>
					<RichText						
						tagName="p"
						className="has-medium-font-size"
						value={ props.attributes.contact_form_description }
						onChange={ ( content ) => props.setAttributes( {contact_form_description: content} ) }
						placeholder={ __( 'To discuss how our digital marketing agency can help you convert leads into customers.', 'wesrom' ) }
					/>
					<div class="form">
						<label class="left">Full Name<input type="text" required placeholder="Full Name*" /></label>
						<label class="right">Email<input type="email" required placeholder="Email*" /></label>
						<label class="left">Phone Number<input type="phone" placeholder="Phone Number" /></label>
						<label class="right">Website<input type="text" placeholder="Website" /></label>
						<label>Further Details<textarea placeholder="Further Details"></textarea></label>
						<RichText
							tagName="button"
							className="has-white-color has-blue-background-color has-text-color has-background wp-block-button__link"
							value={ props.attributes.submit_label }
							onChange={ ( content ) => props.setAttributes( {submit_label: content} ) }
							placeholder="SUBMIT REQUEST"
						/>
						<RichText
							tagName="p"
							className="has-small-font-size form-disclaimer"
							value={ props.attributes.disclaimer_text }
							onChange={ ( content ) => props.setAttributes( {disclaimer_text: content} ) }
							placeholder="*By registering, you confirm that you agree to the storing and processing of your personal data by Wesrom Digital as described in the Privacy Policy."
						/>
						<div class="clear"></div>
					</div>
                </div>
            )
        },
 
        /**
         * save function
         * 
         * @param object props Let's you bind markup and attributes as well as other controls
         * @return JSX ECMAScript Markup for the site
         */
        save ( props ) {
			return (
				<div
					className={props.className}
				>
					<h1 class="has-extra-large-font-size form-title">
						<RichText.Content tag={'h1'} value={ props.attributes.contact_form_title } />
					</h1>
					<p class="has-medium-font-size form-description">
						<RichText.Content tag={'p'} value={ props.attributes.contact_form_description } />					
					</p>
					<form class="form">
						<label class="left">Full Name<input type="text" required placeholder="Full Name*" /></label>
						<label class="right">Email<input type="email" required placeholder="Email*" /></label>
						<label class="left">Phone Number<input type="phone" placeholder="Phone Number" /></label>
						<label class="right">Website<input type="text" placeholder="Website" /></label>
						<label>Further Details<textarea placeholder="Further Details"></textarea></label>
						<input type="submit" class="has-white-color has-blue-background-color has-text-color has-background wp-block-button__link"
							value={ props.attributes.submit_label }
						/>
						<p class="has-small-font-size form-disclaimer">
							<RichText.Content tag={'p'} value={ props.attributes.disclaimer_text } />
						</p>
						<div class="clear"></div>
					</form>
				</div>
            )
        },
    } 
);
