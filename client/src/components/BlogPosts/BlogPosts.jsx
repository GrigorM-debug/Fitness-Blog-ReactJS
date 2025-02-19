import Pagination from "../Pagination/Pagination";
import BlogItem from "./BlogItem/BlogItem";
import styles from './BlogPosts.module.css';
import SideBar from "./SideBar/SideBar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Preloader from "../Preloader/Preloader";
import { useGetLatest } from "../../hooks/useBlogPosts";
import { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import { useSearchParams, useNavigate } from "react-router-dom";
import useBlogPostsSearch from "../../hooks/useBlogPostsSearch";

const initialValues = {
    title: '',
    category: 'Choose a category'
}

export default function BlogPosts() {

    const [posts, isFetching] = useGetLatest();
    const defaultImageUrl = '/img/blog/blog-2.jpg';

    // Filtered data after using the Search
    const [filteredPosts, setFilteredPosts] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        if(posts) {
            setFilteredPosts(posts);
        }
    }, [posts]);

    const [isLoading, searchHandler, errors] = useBlogPostsSearch();

    const searchSubmitHandler = async (formData) => {
        const result = await searchHandler(formData.title, formData.category);

        if(result) {
            setFilteredPosts(result);
            clearData()
            navigate(`?title=${encodeURIComponent(formData.title)}&category=${encodeURIComponent(formData.category)}`, { replace: true });
        }
    }

    const { formData, onChangeHandler, onSubmitHandler, clearData} = useForm(initialValues, searchSubmitHandler);

    const isPreloading = isFetching || isLoading;

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate indices for the current page
    // const indexOfLastPost = currentPage * itemsPerPage;
    // const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    // const currentPosts = filteredPosts && filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts = Array.isArray(filteredPosts) ? 
        filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];


    const handlePageChange = (pageNumber) => {
        navigate(`?page=${encodeURIComponent(pageNumber)}`, { replace: true });

        setCurrentPage(pageNumber);
    }

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
                            {currentPosts && currentPosts.length > 0 
                                ? currentPosts.map((post) => (
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
                                : <h2 className={`${styles.sectionTitle} section-title`}>There are no posts available</h2>
                            }
                            
                            <Pagination 
                                handleItemsPerPage={itemsPerPage}
                                length={filteredPosts && filteredPosts.length}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
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
            </>
        }
        </>
    );
}
