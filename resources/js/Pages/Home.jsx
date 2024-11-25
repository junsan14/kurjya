
import Footer from "@/Shared/Footer";
import { IoSearchCircle,IoSearch } from "react-icons/io5";
import pickup01 from '../imgs/1.jpg'
import GuestLayout from "@/Layouts/GuestLayout";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { fixSearchArea } from "@/script";

export default function Home({auth}){
fixSearchArea();
	return(
		<GuestLayout auth={auth}>
			<SearchForm />
			<main className="main home wrap">
				<section className="section pickup">
					<h2 className="section_title">PICK UP</h2>
					<div className="pickup_items">

						<div className="pickup_items_list">
							<img src={pickup01} alt="" className="pickup_items_list_img" />
							<div className="pickup_items_list_title-area">
								<h3 className="pickup_items_list_title-area_title">Ki Asili Resto Bar & Fast Food</h3>
								<p className="pickup_items_list_title-area_star"><FaStar /> 4.5</p>

							</div>
							<p className="pickup_items_list_area">Nyarugenge, Kigali,</p>
							<p className="pickup_items_list_price">$200 at night</p>
						</div>
						<div className="pickup_items_list">
							<img src={pickup01} alt="" className="pickup_items_list_img" />
							<div className="pickup_items_list_title-area">
								<h3 className="pickup_items_list_title-area_title">Ki Asili Resto Bar & Fast Food</h3>
								<p className="pickup_items_list_title-area_star"><FaStar /> 4.5</p>

							</div>
							<p className="pickup_items_list_area">Nyarugenge, Kigali,</p>
							<p className="pickup_items_list_price">$200 at night</p>
						</div>
						<div className="pickup_items_list">
							<img src={pickup01} alt="" className="pickup_items_list_img" />
							<div className="pickup_items_list_title-area">
								<h3 className="pickup_items_list_title-area_title">Ki Asili Resto Bar & Fast Food</h3>
								<p className="pickup_items_list_title-area_star"><FaStar /> 4.5</p>

							</div>
							<p className="pickup_items_list_area">Nyarugenge, Kigali,</p>
							<p className="pickup_items_list_price">$200 at night</p>
						</div>
						<div className="pickup_items_list">
							<img src={pickup01} alt="" className="pickup_items_list_img" />
							<div className="pickup_items_list_title-area">
								<h3 className="pickup_items_list_title-area_title">Ki Asili Resto Bar & Fast Food</h3>
								<p className="pickup_items_list_title-area_star"><FaStar /> 4.5</p>

							</div>
							<p className="pickup_items_list_area">Nyarugenge, Kigali,</p>
							<p className="pickup_items_list_price">$200 at night</p>
						</div>
						<div className="pickup_items_list">
							<img src={pickup01} alt="" className="pickup_items_list_img" />
							<div className="pickup_items_list_title-area">
								<h3 className="pickup_items_list_title-area_title">Ki Asili Resto Bar & Fast Food</h3>
								<p className="pickup_items_list_title-area_star"><FaStar /> 4.5</p>

							</div>
							<p className="pickup_items_list_area">Nyarugenge, Kigali,</p>
							<p className="pickup_items_list_price">$200 at night</p>
						</div>
						
					</div>

				</section>
			</main>

			<Footer />
		</GuestLayout>
		)
}


function SearchForm(){
	return(
		<>
		<form action="" className="search-form js-search-form">
			<div className="search-form_input-area">
				<label htmlFor="destinations" className="search-form_input-area_label">Where</label>
				<input type="text" id="destinations" className="search-form_input-area_box" placeholder="Search destinations"/>
			</div>
			<div className="search-form_input-area">
				<label htmlFor="genre" className="search-form_input-area_label">What</label>
				<input type="text" id="genre" className="search-form_input-area_box" placeholder="Add genres"/>
			</div>
			<div className="search-form_input-area">
				<label htmlFor="keywords" className="search-form_input-area_label">Keywords</label>
				<input type="text" id="keywords" className="search-form_input-area_box" placeholder="Add keywords"/>
			</div>
			<div className="search-form_btn-area">
				<IoSearchCircle />
			</div>
			<div className="search-form_text-area">
				<p>Anywhere, any genre, any keywords</p>
			</div>
		</form>

		</>
		)
}

