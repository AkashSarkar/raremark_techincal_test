import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { postPlaceThunk } from "../home/HomeSlice";

const Host = () => {
    const [formData, setFormData] = useState({
        username: "",
        title: "",
        rating: 0,
        image_url: "",
        description: "",
        price: "",
        type: "",
        avatar_url: "",
        profession: "",
        room_type: "",
        guest: "",
        bedroom: "",
        beds: "",
        bathrooms: "",
        facility: ""
    })
    const dispatch = useDispatch();
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postPlaceThunk(formData, history))
    }
    const handleFormData = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control"
                        name="username" value={formData.username} onChange={handleFormData} placeholder="username" />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                        name="title" value={formData.title} onChange={handleFormData} placeholder="title" />
                </div>
                <div className="form-group">
                    <label>Rating</label>
                    <input type="text" className="form-control"
                        name="rating" value={formData.rating} onChange={handleFormData} placeholder="rating" />
                </div>
                <div className="form-group">
                    <label>Image url</label>
                    <input type="text" className="form-control"
                        name="image_url" value={formData.image_url} onChange={handleFormData} placeholder="image url" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" rows={3}
                        name="description" value={formData.description} onChange={handleFormData} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control"
                        name="price" value={formData.price} onChange={handleFormData} placeholder="price" />
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <input type="text" className="form-control"
                        name="type" value={formData.type} onChange={handleFormData} placeholder="type" />
                </div>
                <div className="form-group">
                    <label>Avatar url</label>
                    <input type="text" className="form-control"
                        name="avatar_url" value={formData.avatar_url} onChange={handleFormData} placeholder="avatar url" />
                </div>
                <div className="form-group">
                    <label>Profession</label>
                    <input type="text" className="form-control"
                        name="profession" value={formData.profession} onChange={handleFormData} placeholder="profession" />
                </div>
                <div className="form-group">
                    <label>Room type</label>
                    <input type="text" className="form-control"
                        name="room_type" value={formData.room_type} onChange={handleFormData} placeholder="Room type" />
                </div>

                <div className="form-group">
                    <label>Guest</label>
                    <input type="number" className="form-control"
                        name="guest" value={formData.guest} onChange={handleFormData} placeholder="guest" />
                </div>
                <div className="form-group">
                    <label>Bedroom</label>
                    <input type="number" className="form-control"
                        name="bedroom" value={formData.bedroom} onChange={handleFormData} placeholder="bedroom" />
                </div><div className="form-group">
                    <label>beds</label>
                    <input type="number" className="form-control"
                        name="beds" value={formData.beds} onChange={handleFormData} placeholder="beds" />
                </div><div className="form-group">
                    <label>bathrooms</label>
                    <input type="number" className="form-control"
                        name="bathrooms" value={formData.bathrooms} onChange={handleFormData} placeholder="bathrooms" />
                </div>

                <div className="form-group">
                    <label>Facility</label>
                    <textarea className="form-control" rows={3} name="facility" value={formData.FACILITY} onChange={handleFormData} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};
export default Host;