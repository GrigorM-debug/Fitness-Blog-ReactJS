import Pagination from "../Pagination/Pagination";
import BlogItem from "./BlogItem/BlogItem";
import styles from './BlogPosts.module.css';
import SideBar from "./SideBar/SideBar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Preloader from "../Preloader/Preloader";
import { useGetLatest } from "../../hooks/useBlogPosts";
import { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import useBlogPostsSearch from "../../hooks/useBlogPostsSearch";

export default function BlogPosts() {

    const [posts, isFetching] = useGetLatest();

    const defaultImageUrl = '/img/blog/blog-2.jpg';

    //Filtered data after using the Search
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);

    const initialValues = {
        title: '',
        category: 'Choose a category'
    }

    const [isLoading, searchHandler, errors] = useBlogPostsSearch()
    // console.log(errors)

    const searchSubmitHandler = async (formData) => {
        const result = await searchHandler(formData.title, formData.category)
        setFilteredPosts(result);
    }

    const {formData, onChangeHandler, onSubmitHandler} = useForm(initialValues, searchSubmitHandler)
    
    const isPreloading = isFetching || isLoading;
    return (
        <>
        {isPreloading ? <Preloader /> :
            <>
            <Breadcrumb title="Our Blog" page="Our Blog" breadcrumbImage="img/gallery/gallery-1.jpg"/>

            <section className={styles.blogSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-0">
                            <div className={`${styles.sectionTitle} section-title`}>
                                <h2>Our Blog Posts</h2>
                            </div>
                            {filteredPosts && filteredPosts.length > 0 
                                ? filteredPosts.map((post) => (
                                        <BlogItem 
                                            key={post._id}
                                            id={post._id}
                                            title={post.title}
                                            creator={post.author.username}
                                            imageUrl={post.imageUrl && post.imageUrl.trim() !== '' 
                                                ? post.imageUrl 
                                                : defaultImageUrl
                                            }
                                            shortDescription={post.shortDescription}
                                            category={post.category}
                                            createdOn={post._createdOn}
                                        />
                                    ))
                                : <h2 className={`${styles.sectionTitle} section-title`}>There is no posts added</h2>
                            }
                            
                            <Pagination />
                        </div>
                        <SideBar 
                            onChange={onChangeHandler}
                            onSubmit={onSubmitHandler}
                            formData={formData}
                            errors={errors}
                        />
                    </div>
                </div>
            </section>
        /</>
        }
        </>
    );
};