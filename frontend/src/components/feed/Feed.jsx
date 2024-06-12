import React, { useEffect,useState } from 'react'
import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from "axios";

export default function Feed({id}) {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState()

  useEffect(() => {
    console.log("feed component is running");
    const fetchProfile = async () => {
      const res = await axios.get(`/api/users/${id}`)
      setProfile(res.data);
    };
    fetchProfile();
  }, [id]);

  useEffect(() => {
    console.log("feed component is running");
    const fetchPosts = async () => {
      console.log('Fetching posts for id:', id);
      const res = await axios.get(`/api/posts/timeline/${id}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [id]);

  // console.log('Rendering posts:', posts);
  return (
    <div className='feed'>
        <div className='feedWrapper'>
            <Share />
            {posts.map((p) => (
              <Post key={p._id} post={p} />
            ))}
        </div>
    </div>
  )
}

