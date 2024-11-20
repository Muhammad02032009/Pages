import { lazy } from "react";



export const AboutL=lazy(()=>import('../about-page/about/about'))
export const CareersL=lazy(()=>import('../about-page/careers/careers'))

export const BlogL=lazy(()=>import('../blog-page/blog/blog'))
export const SinglePL=lazy(()=>import('../blog-page/single-post/single-page'))

export const StudyL=lazy(()=>import('../case-page/study/study'))
export const StudiesL=lazy(()=>import('../case-page/stydies/studies'))

export const ContactsL=lazy(()=>import('../contacts-page/contacts'))

export const HomeL=lazy(()=>import('../home-page/home'))

export const ServiceL=lazy(()=>import('../services-page/service/service'))
export const ServicesL=lazy(()=>import('../services-page/services/services'))