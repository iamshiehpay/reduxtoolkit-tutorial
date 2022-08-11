import React from "react";
import {
    BrowserRouter,
    Route,
    Navigate,
    Routes,
  } from 'react-router-dom'
import HomeLayout from "./app/HomeLayout";
import NavbarLayout from "./app/NavbarLayout";

import { EditPostForm } from './features/posts/EditPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { UserPage } from "./features/users/UserPage";
import { UsersList } from "./features/users/UsersList";
import { NotificationsList } from "./features/notifications/NotificationsList";
 
const App = () => {
    return(
        <div className="app">
            <BrowserRouter>
                <Routes>
                        <Route path='/' element={<NavbarLayout />}>
                            <Route index element={<HomeLayout />} />
                            <Route path="/posts/:postId" element={<SinglePostPage />}/>
                            <Route path="/editPost/:postId" element={<EditPostForm />}/>
                            <Route path="/notifications" element={<NotificationsList />} />
                            <Route path="/users" element={<UsersList />}/>
                            <Route path="/users/:userId" element={<UserPage />} />
                            <Route path="*" element={<Navigate to='/'/>} />
                        </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;