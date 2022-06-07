---
title: 'How I Made This Website'
date: '2022-06-05'
---

### Prerequisites

In all, making this website took about five hours. If you follow these steps you'll be able to create your own website in this time (or less)!

The most important step is the one you take before you begin. Do you have an idea of what kind of website you'd like to create? For my purposes, I sought out websites that paired clean web design with simple functionality. Here are some of my favorite portfolio websites:

- [Nathan Borror](https://nathan.run)
- [Will Manidis](https://www.willmanidis.com)
- [Patrick Collison](https://patrickcollison.com)
- [Paul Graham](http://paulgraham.com)

### Setup

I decided to use [Next.js](https://nextjs.org/), which is free to use and is an easy way to create beautiful static pages. You can learn more about Next.js [here](https://nextjs.org/learn/foundations/about-nextjs) and follow along with a [tutorial](https://nextjs.org/learn/basics/create-nextjs-app) that guides you through the process of building website just like this.

To write in [React](https://reactjs.org/), you will need to use a code editor. If you're new to development, I would recommend using [VS Code](https://code.visualstudio.com/). It is free and simple to use.

In addition, you will need to create a [GitHub](https://github.com) account (if you don't already have one). We'll use this later. Make sure you have [Git](https://git-scm.com/) installed as well. You can check if you have it by entering 'git --version' in your terminal. If you don't already have Git installed, it will prompt you through the installation process.

### Follow the steps!

Next.js' tutorial does a great job explaining a lot of the functionality included in their React framework. This is fancy talk for "follow the steps, and it's simple to make a beautiful portfolilo/blog/whatever-you-want website!"

If you have little to no programming experience - don't panic! I'm in the same boat. If you can copy and paste, you can do it lol.

### GitHub

Once you finish the tutorial, you'll be left with a folder filled with files, and more folders! This is great - but the only thing you can do is look at it on your own machine :( (type in 'npm start' in your terminal, and head to [localhost:3000](http://localhost:3000/)).

Log in to that GitHub account you made earlier. You will want to navigate to the navbar on the left-hand side of the screen and find the green 'New' button. Pressing this will create a new repository. You can name it whatever you'd like, and proceed through the steps. This will serve as a home for your code.

Since your code is finished (for now), you'll want to push an existing repository from the command line. To do this, head to the section titled **…or push an existing repository from the command line**. You'll want to run these three commands in your terminal, substituting your GitHub username and repository name:

    git remote add origin https://github.com/your_username/repository_name.git
    git branch -M main
    git add --all
    git commit -m "enter whatever you want the commit to be called here"
    git push -u origin main

For future use, you'll just need to run these commands to push your updated code to GitHub:

    git add --all
    git commit -m "enter whatever you want the commit to be called here"
    git push -u origin main

*I'm definitely **not** a GitHub/Git expert, nor do I claim to be. Take my advice with a grain of salt. I'm sure there are some web developers that would throw a fit on reading this process. However, if you're limited in experience (like me!), these steps should suffice*.

### Deployment

While you can deploy your code through any service you like, I would reccomend using [Vercel](https://vercel.com) if you're looking for a free and simple way to deploy your code. It's a powerful tool, and was built by the same team that developed Next.js, so it will always be supported. If you don't really know what you're doing (again, like me), Vercel is a great solution.

Vercel has integrations with GitHub built in, so all you will need to do is connect your repository with its network. Then, you're done! Literally, that's it. It's really not that complicated - as long as you follow the steps in each stage of development, you can do it. 🎉

### Adding blog posts

The best part of using Next.js is that it is *extremely* simple to add posts to a blog. In the tutorial, you already set up all the elements you need to hit the ground running. To create a new blog post, do the following:

- Navigate to /posts in your project file. You can do this in either your code editor or your terminal, substituting "project_name" with the name of your project folder

        cd project_name
        cd posts

- Create a new file. You can do this in either your code editor or your terminal. Name it whatever you'd like, followed by .md (*ex. transit.md*)

        touch transit.md

- Commit the changes to GitHub. This process is outlined above
- Refresh the site and watch as Vercel handles the deployment
- Share your new blog post! 🎉

### Connecting a custom domain

While this is not neccesary to create a blog, personal website, or otherwise, sometimes it can be nice to have a custom domain. This means that instead of using the free domain provided by Vercel, users can make their way to a simple and easy to remember URL. For instance, instead of using "pennsylvania_animal_blog.go.vercel.com", readers can simple enter "pennanimals.com", if you own that domain.

While you can purchase a domain directly from Vercel, I chose to use [Google Domains](https://domains.google.com). They have a large library of domains and include many unique domain endings, including the one you're reading this on!

Choosing a domain name doesn't have to be a complicated task, but I think there a couple guideposts you should keep in mind.

Here's an interesting [post](https://www.quora.com/How-did-Stripe-come-up-with-its-name) from the former CTO of [Stripe](https://stripe.com) that details how the company chose its name.

tl;dr: Choose a short(er) noun, or something quick and familiar. While the context of the early days of Stripe's naming debate is for startups, I think this applies more generally across domains. Keep it short and familiar, while maintaing relevance to the actual content or service.

To actually link the domain to your deployment service, you'll need to open the DNS settings of the domain host and create some new records. [This](https://vercel.com/docs/concepts/projects/custom-domains) is a pretty useful guide on how to do this if you use Vercel. If you're connecting a host via Google, I found [this post](https://gist.github.com/khushal87/81b7b74c4e5324b2ff29bbc51f059513#:~:text=Only%20add%20the%20IPv4%20address,and%20leave%20TTL%20as%201h%20.) to be quite handy.

### Other resources

- [Here's](https://github.com/dvdhutch/dvdhutch-personal-site) the source code for this website. Feel free to use some of it if you want lol. Just switch it up a little bit
- Since you'll be creating blog posts in [Markdown](https://daringfireball.net/projects/markdown/), you should become familiar with the syntax. I found [this guide](https://www.markdownguide.org/basic-syntax/) to be useful, and to be honest, I'm still familiarizing myself with some of the more intricate details
- Have fun! 🎉 the goal of building your own website is to create something personal. Enjoy the process and put your own unique touch on it

*Again, I'm not an expert on **anything** covered in this post. I hope this can help you! I enjoyed building it and found it helpful to share my thinking on web design, names, and everything in-between*.