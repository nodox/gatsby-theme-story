import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Additional from '../components/Additional'

import banner from "images/banner.jpg"
import spotlight01 from "images/spotlight01.jpg"
import spotlight02 from "images/spotlight02.jpg"
import spotlight03 from "images/spotlight03.jpg"

import thumbs01 from "images/gallery/thumbs/01.jpg"
import thumbs02 from "images/gallery/thumbs/02.jpg"
import thumbs03 from "images/gallery/thumbs/03.jpg"
import thumbs04 from "images/gallery/thumbs/04.jpg"
import thumbs05 from "images/gallery/thumbs/05.jpg"
import thumbs06 from "images/gallery/thumbs/06.jpg"
import thumbs07 from "images/gallery/thumbs/07.jpg"
import thumbs08 from "images/gallery/thumbs/08.jpg"
import thumbs09 from "images/gallery/thumbs/09.jpg"
import thumbs10 from "images/gallery/thumbs/10.jpg"
import thumbs11 from "images/gallery/thumbs/11.jpg"
import thumbs12 from "images/gallery/thumbs/12.jpg"

import "../sass/main.scss"

const IndexPage = () => (
  <Layout>
    {/* <!-- Wrapper --> */}
			<div id="wrapper" className="divided">

				{/* <!-- Banner --> */}
					<section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div className="content">
							<h1>Story</h1>
							<p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
							<p>This is a <strong>Banner</strong> element, and it's generally used as an introduction or opening statement. You can customize its <span className="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-banner">details</a>).</p>
							<ul className="actions stacked">
								<li><a href="#first" className="button large wide smooth-scroll-middle">Get Started</a></li>
							</ul>
						</div>
						<div className="image">
							<img src={banner} alt="" />
						</div>
					</section>

				{/* <!-- Spotlight --> */}
					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
						<div className="content">
							<h2>Spotlight</h2>
							<p>This is a <strong>Spotlight</strong> element, and it's generally used &ndash; as its name implies &ndash; to spotlight a particular feature, subject, or pretty much whatever. You can customize its <span className="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).</p>
							<ul className="actions stacked">
								<li><a href="/" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src={spotlight01} alt="" />
						</div>
					</section>

				{/* <!-- Spotlight --> */}
					<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>Spotlight</h2>
							<p>This is also a <strong>Spotlight</strong> element, and it's here because this demo would look a bit empty with just one spotlight. Like all spotlights, you can customize its <span className="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).</p>
							<ul className="actions stacked">
								<li><a href="/" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src={spotlight02} alt="" />
						</div>
					</section>

				{/* <!-- Spotlight --> */}
					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>Spotlight</h2>
							<p>And yes, this is another <strong>Spotlight</strong> element, and it's also here because I need to fill a bit of space. Naturally, like any other spotlight, you can customize its <span className="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).</p>
							<ul className="actions stacked">
								<li><a href="/" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src={spotlight03} alt="" />
						</div>
					</section>

				{/* <!-- Items --> */}
					<section className="wrapper style1 align-center">
						<div className="inner">
							<h2>Items</h2>
							<p>This is an <strong>Items</strong> element, and it's basically just a grid for organizing items of various types. You can customize its <span className="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-items">details</a>).</p>
							<div className="items style1 medium onscroll-fade-in">
								<section>
									<span className="icon style2 major fa-diamond"></span>
									<h3>One</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-save"></span>
									<h3>Two</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-bar-chart"></span>
									<h3>Three</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-wifi"></span>
									<h3>Four</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-cog"></span>
									<h3>Five</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-paper-plane"></span>
									<h3>Six</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-desktop"></span>
									<h3>Seven</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-refresh"></span>
									<h3>Eight</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-hashtag"></span>
									<h3>Nine</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-bolt"></span>
									<h3>Ten</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-envelope"></span>
									<h3>Eleven</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className="icon style2 major fa-leaf"></span>
									<h3>Twelve</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
							</div>
						</div>
					</section>

          {/*  */}
          <Additional />


				{/* <!-- Footer --> */}
					<footer className="wrapper style1 align-center">
						<div className="inner">
							<ul className="icons">
								<li><a href="/" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="/" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
								<li><a href="/" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
								<li><a href="/" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
							</ul>
							<p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
						</div>
					</footer>

			</div>
  </Layout>
)

export default IndexPage
