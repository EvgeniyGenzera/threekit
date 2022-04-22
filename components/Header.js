export default function Header() {
  return (
    <header className="header" data-aos="slide-down">
      <div className="header__container">
        <div className="header__logo">
          <div
            id="hs_cos_wrapper_header_logo"
            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-logo"
            data-hs-cos-general-type="widget"
            data-hs-cos-type="module"
          >
            <span
              id="hs_cos_wrapper_header_logo_hs_logo_widget"
              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo"
              data-hs-cos-general-type="widget"
              data-hs-cos-type="logo"
            >
              <a
                href="//www.threekit.com/?hsLang=en"
                id="hs-link-header_logo_hs_logo_widget"
              >
                <img
                  src="https://www.threekit.com/hubfs/Logos%20and%20Trademarks/threekit_logo_black.svg"
                  className="hs-image-widget"
                  width="125"
                  alt="ThreeKit"
                  title="ThreeKit"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="header__menu">
          <input type="checkbox" id="nav-toggle" />
          <label className="header__navigation-toggle" htmlFor="nav-toggle">
            <span className="header__mobile-menu-open-icon">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="24"
                aria-labelledby="bars1"
              >
                <title id="bars1">Open main menu</title>
                <g id="layer1">
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </g>
              </svg>
            </span>
            <span className="header__mobile-menu-close-icon">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="24"
                aria-labelledby="times2"
              >
                <title id="times2">Close main menu</title>
                <g id="layer1">
                  <path d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path>
                </g>
              </svg>
            </span>
          </label>
          <div className="header__navigation">
            <div
              id="hs_cos_wrapper_header_navigation_primary"
              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
              data-hs-cos-general-type="widget"
              data-hs-cos-type="module"
            >
              <nav aria-label="Main menu" className="navigation-primary">
                <ul className="submenu level-1">
                  <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                    <a href="#" className="menu-link">
                      Platform
                    </a>

                    <input
                      type="checkbox"
                      id="Platform"
                      className="submenu-toggle"
                    />
                    <label className="menu-arrow" htmlFor="Platform">
                      <span className="menu-child-toggle-icon">
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="16"
                          aria-labelledby="chevron-down3"
                        >
                          <title id="chevron-down3">Open the submenu</title>
                          <g id="layer1">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                          </g>
                        </svg>
                      </span>
                    </label>

                    <ul className="submenu level-2">
                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/platform-overview"
                          className="menu-link"
                        >
                          Platform Overview
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/solutions/3d-product-configurator"
                          className="menu-link"
                        >
                          3D Configurator
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/solutions/virtual-photographer"
                          className="menu-link"
                        >
                          Virtual Photographer™
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/solutions/augmented-reality-for-ecommerce"
                          className="menu-link"
                        >
                          Augmented Reality
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                    <a
                      href="https://www.threekit.com/pricing"
                      className="menu-link"
                    >
                      Pricing
                    </a>
                  </li>

                  <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                    <a href="#" className="menu-link">
                      Industries &amp; Integrations
                    </a>

                    <input
                      type="checkbox"
                      id="Industries &amp; Integrations"
                      className="submenu-toggle"
                    />
                    <label
                      className="menu-arrow"
                      htmlFor="Industries &amp; Integrations"
                    >
                      <span className="menu-child-toggle-icon">
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="16"
                          aria-labelledby="chevron-down4"
                        >
                          <title id="chevron-down4">Open the submenu</title>
                          <g id="layer1">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                          </g>
                        </svg>
                      </span>
                    </label>

                    <ul className="submenu level-2">
                      <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                        <a href="#" className="menu-link">
                          For Industries
                        </a>

                        <input
                          type="checkbox"
                          id="For Industries"
                          className="submenu-toggle"
                        />
                        <label className="menu-arrow" htmlFor="For Industries">
                          <span className="menu-child-toggle-icon">
                            <svg
                              version="1.0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              aria-labelledby="chevron-down5"
                            >
                              <title id="chevron-down5">Open the submenu</title>
                              <g id="layer1">
                                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                              </g>
                            </svg>
                          </span>
                        </label>

                        <ul className="submenu level-3">
                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/furniture-and-home-goods"
                              className="menu-link"
                            >
                              Furniture &amp; Home Goods
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/clothing-and-shoes"
                              className="menu-link"
                            >
                              Clothing &amp; Shoes
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/custom-furniture-case-goods-and-millwork"
                              className="menu-link"
                            >
                              Commercial Furniture
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/building-materials"
                              className="menu-link"
                            >
                              Building Materials
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/fitness_and_sporting_goods"
                              className="menu-link"
                            >
                              Fitness &amp; Sporting Goods
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/manufacturing"
                              className="menu-link"
                            >
                              Manufacturing
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/kitchen-and-bath"
                              className="menu-link"
                            >
                              Kitchen &amp; Bath
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/jewelry-and-watches"
                              className="menu-link"
                            >
                              Jewelry &amp; Watches
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/tech-and-electronics"
                              className="menu-link"
                            >
                              Technology &amp; Electronics
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/medical-sales"
                              className="menu-link"
                            >
                              Medical Devices &amp; Healthtech
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/luggage"
                              className="menu-link"
                            >
                              Luggage
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/vehicles-and-auto-parts"
                              className="menu-link"
                            >
                              Vehicles &amp; Auto Parts
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/industry/field-services"
                              className="menu-link"
                            >
                              Field Service
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                        <a href="#" className="menu-link">
                          For eComm Platforms
                        </a>

                        <input
                          type="checkbox"
                          id="For eComm Platforms"
                          className="submenu-toggle"
                        />
                        <label
                          className="menu-arrow"
                          htmlFor="For eComm Platforms"
                        >
                          <span className="menu-child-toggle-icon">
                            <svg
                              version="1.0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              aria-labelledby="chevron-down6"
                            >
                              <title id="chevron-down6">Open the submenu</title>
                              <g id="layer1">
                                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                              </g>
                            </svg>
                          </span>
                        </label>

                        <ul className="submenu level-3">
                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/ecommerce-platform-integration/bigcommerce-product-configurator"
                              className="menu-link"
                            >
                              BigCommerce
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/ecommerce-platform-integration/commercetools-product-configurator"
                              className="menu-link"
                            >
                              commercetools
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/ecommerce-platform-integration/magento-product-configurator"
                              className="menu-link"
                            >
                              Magento
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/ecommerce-platform-integration/salesforce-product-configurator"
                              className="menu-link"
                            >
                              Salesforce
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/salesforce/salesforce-cpq"
                              className="menu-link"
                            >
                              Salesforce CPQ
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/salesforce/commerce-cloud-product-configurator"
                              className="menu-link"
                            >
                              Salesforce Commerce Cloud
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/ecommerce-platform-integration/sap-product-configuration"
                              className="menu-link"
                            >
                              SAP Commerce Cloud
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/ecommerce-platform-integration/shopify-product-customizer"
                              className="menu-link"
                            >
                              Shopify
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/ecommerce-platform-integration/wordpress-and-woocommerce-product-configurator"
                              className="menu-link"
                            >
                              WooCommerce
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/3d-advertising-display"
                              className="menu-link"
                            >
                              3D Display Ads
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                        <a href="#" className="menu-link">
                          For Partners
                        </a>

                        <input
                          type="checkbox"
                          id="For Partners"
                          className="submenu-toggle"
                        />
                        <label className="menu-arrow" htmlFor="For Partners">
                          <span className="menu-child-toggle-icon">
                            <svg
                              version="1.0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="16"
                              aria-labelledby="chevron-down7"
                            >
                              <title id="chevron-down7">Open the submenu</title>
                              <g id="layer1">
                                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                              </g>
                            </svg>
                          </span>
                        </label>

                        <ul className="submenu level-3">
                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/agency-portal"
                              className="menu-link"
                            >
                              Agencies
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/feature/pim"
                              className="menu-link"
                            >
                              PIMs
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/feature/erp"
                              className="menu-link"
                            >
                              ERPs
                            </a>
                          </li>

                          <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                            <a
                              href="https://www.threekit.com/partners/small-business"
                              className="menu-link"
                            >
                              Small Businesses
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                    <a
                      href="https://www.threekit.com/shop-threekit"
                      className="menu-link"
                    >
                      <svg className="icon-svg" viewBox="0,0,576,512">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      Shop in 3D
                      <svg className="icon-svg" viewBox="0,0,576,512">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </a>
                  </li>

                  <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                    <a href="#" className="menu-link">
                      Resources
                    </a>

                    <input
                      type="checkbox"
                      id="Resources"
                      className="submenu-toggle"
                    />
                    <label className="menu-arrow" htmlFor="Resources">
                      <span className="menu-child-toggle-icon">
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="16"
                          aria-labelledby="chevron-down8"
                        >
                          <title id="chevron-down8">Open the submenu</title>
                          <g id="layer1">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                          </g>
                        </svg>
                      </span>
                    </label>

                    <ul className="submenu level-2">
                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/3d-product-library"
                          className="menu-link"
                        >
                          Demos
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/blog"
                          className="menu-link"
                        >
                          Blog
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/customer-love"
                          className="menu-link"
                        >
                          Case Studies
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/resource-library"
                          className="menu-link"
                        >
                          Resource Library
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/the-complete-glossary-of-3d-terms"
                          className="menu-link"
                        >
                          3D Glossary
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/success"
                          className="menu-link"
                        >
                          Customer Hub
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu menu-item hs-skip-lang-url-rewrite">
                    <a href="#" className="menu-link">
                      Company
                    </a>

                    <input
                      type="checkbox"
                      id="Company"
                      className="submenu-toggle"
                    />
                    <label className="menu-arrow" htmlFor="Company">
                      <span className="menu-child-toggle-icon">
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="16"
                          aria-labelledby="chevron-down9"
                        >
                          <title id="chevron-down9">Open the submenu</title>
                          <g id="layer1">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                          </g>
                        </svg>
                      </span>
                    </label>

                    <ul className="submenu level-2">
                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/about-us"
                          className="menu-link"
                        >
                          About Us
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/why-threekit"
                          className="menu-link"
                        >
                          Why Threekit?
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/visuals-make-a-difference"
                          className="menu-link"
                        >
                          Visuals Make a Difference
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/news-and-press"
                          className="menu-link"
                        >
                          News &amp; Press
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/careers"
                          className="menu-link"
                        >
                          Careers
                        </a>
                      </li>

                      <li className="no-submenu menu-item hs-skip-lang-url-rewrite">
                        <a
                          href="https://www.threekit.com/contact-us"
                          className="menu-link"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="no-submenu menu-item visible-phone mobile-cta">
                    <span
                      id="hs_cos_wrapper_header_navigation_primary_"
                      className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_cta"
                      data-hs-cos-general-type="widget"
                      data-hs-cos-type="cta"
                    >
                      <span
                        className="hs-cta-wrapper"
                        id="hs-cta-wrapper-2f4a76df-b276-46e8-ae03-ebfaf19b9eda"
                      >
                        <span
                          className="hs-cta-node hs-cta-2f4a76df-b276-46e8-ae03-ebfaf19b9eda"
                          id="hs-cta-2f4a76df-b276-46e8-ae03-ebfaf19b9eda"
                          data-hs-drop="true"
                        >
                          <a
                            id="cta_button_5037953_35b68e5b-46c2-4222-a4a7-b242d7899471"
                            className="cta_button button button--secondary"
                            href="https://www.threekit.com/cs/c/?cta_guid=35b68e5b-46c2-4222-a4a7-b242d7899471&amp;signature=AAH58kHNwyAfZo5isdc35w_mTzm1Qa43Gg&amp;pageId=38341749926&amp;placement_guid=2f4a76df-b276-46e8-ae03-ebfaf19b9eda&amp;click=68e6313d-dadc-47c8-88e2-64b724e9381e&amp;hsutk=d403eaab82421cf6fe1a19fa8c7d2946&amp;canon=https%3A%2F%2Fwww.threekit.com%2F&amp;utm_referrer=https%3A%2F%2Fwww.threekit.com%2F3d-product-library&amp;portal_id=5037953&amp;redirect_url=APefjpEKxDV3-YcMinRw38y_Sb7nbw_ExfljEWnRjckS3THaOGOCr9cX0oDE43Pu-1yHSzd2ZMZk3kj1T74kzcnVa54vBSVsMLn0q5klmIvK4N1Gg6BlVg-TZJc7ISwFT6EUjsxgbVs_sQB1EeX-Od0-AqmbNdL5bW6F52nQuATjKNnXq81rzlB71e8rlGX303hN8OUL4YL6eHBzDTMxiqu90EwhsspJYyteR-narWUoVlG8dY7YEhgx_N8l01PRX_VTBR1t5pC423pM5JP34lc94fHl7bx0rw&amp;__hstc=225628165.d403eaab82421cf6fe1a19fa8c7d2946.1617269139180.1617269139180.1617878569816.2&amp;__hssc=225628165.2.1617878569816&amp;__hsfp=512654907&amp;contentType=standard-page"
                            cta_dest_link="https://www.threekit.com/schedule-a-demo"
                            title="Schedule a Demo"
                          >
                            Schedule a Demo
                          </a>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
