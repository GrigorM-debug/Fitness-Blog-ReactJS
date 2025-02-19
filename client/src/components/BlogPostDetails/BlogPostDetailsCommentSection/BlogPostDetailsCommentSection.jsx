import styles from './BlogPostDetailsCommentSection.module.css';
import useForm from '../../../hooks/useForm';
import { useCreateComment, useGetAll } from '../../../hooks/useBlogPostComments';
import CommentItem from './CommentItem/CommentItem';
import Preloader from '../../Preloader/Preloader';
import LeaveComment from './LeaveCommentSection/LeaveComment';

const initialValues = {
    comment: ''
}

export default function BlogPostDetailsCommentSection({
    postId,
    isAuthenticated,
}) {

    const [comments, updateComments, isFetchingComments] = useGetAll(postId);
    
    const [createCommentHandler, errors, isFetchingNewComment] = useCreateComment();

    
    const onSubmit = async ({comment}) => {
        const newComment = await createCommentHandler(postId, comment);
        if (newComment) {
            updateComments();
            clearData();
        }
    }


    const {formData, onChangeHandler, onSubmitHandler, clearData} = useForm(initialValues, onSubmit);

    const isProcessing = isFetchingComments || isFetchingNewComment;


    return (
        <>
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.commentOption}>
                    <h5 className={styles.coTitle}>Comments</h5>
                    {isProcessing ? (
                        <Preloader />
                    ) : (
                        comments && comments.length > 0 ? comments.map((comment) => (
                            <CommentItem 
                                key={comment._id}
                                author={comment.author.username}
                                authorId={comment.author._id}
                                authorProfilePic={comment.author.imageUrl}
                                text={comment.text}
                                commentId={comment._id}
                            />
                        ))
                        : <h3>No comments yet</h3>
                    )}
                </div>
            </div>
            <div className="col-lg-6">
                    <LeaveComment
                        onChangeHandler={onChangeHandler}
                        onSubmitHandler={onSubmitHandler}
                        formData={formData}
                        isDisabled={!isAuthenticated}
                        errors={errors}
                    />
            </div>
        </div>
        </>
    );
};