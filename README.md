# Tabletop Adventures Timelines

This is a Jekyll-powered site for creating and displaying timelines for tabletop roleplaying game campaigns. It's designed to be simple to update and is hosted on GitHub Pages.

---

## Local Setup 💻

To run this website on your local machine, you'll need a Ruby development environment. This allows you to see your changes instantly without having to push them to GitHub every time.

1.  **Prerequisites**: Make sure you have **Ruby** and **Bundler** installed. It's highly recommended to use a version manager like `rbenv` to avoid system permission issues.

> [!Note]
> Your project is configured to use the ruby version specified in `.ruby-version`. Make sure this version is active.

2.  **Install Dependencies**: Navigate to the project's root folder in your terminal and run this command. It will download and install all the gems (plugins) listed in your `Gemfile.lock`.
    ```bash
    bundle install
    ```

3.  **Run the Server**: Start the Jekyll server with this command:
    ```bash
    bundle exec jekyll serve
    ```

4.  **View Your Site**: Open your web browser and navigate to the server address shown in your terminal, which is usually **`http://127.0.0.1:4000`**. The site will automatically refresh whenever you save a file.

---

## How to Add a Campaign 🗺️

Adding a new campaign is a three-step process. For this example, let's add a "Discworld SCP" campaign run by "user-1".

#### 1. Configure the Collection
First, you need to tell Jekyll about the new campaign.
* Open the **`_config.yml`** file.
* Under the `collections:` section, add a new entry for your campaign.
* Add the `gm` property to specify the Gamemaster's name. This is used to group campaigns on the homepage.

    ```yml
    collections:
      user-1-discworld_scp: # <-- The key is <username>-<campaign_name>
        output: true
        title: "Discworld SCP"
        gm: "user-1" # <-- Add the Gamemaster's name
        icon: "/assets/images/user-1-discworld_scp/icon.png"
        description: "A short, custom summary of the campaign." # Optional
    ```

#### 2. Create the Campaign Page
This file creates the main page for the campaign's timeline.
* Go to the **`_pages/`** folder.
* Create a new file named `campaign_user-1-discworld_scp.md`.
* Add the following front matter, making sure the `collection` matches the key from `_config.yml`.
    ```yml
    ---
    layout: timeline
    title: "Discworld SCP Timeline"
    collection: user-1-discworld_scp
    permalink: /discworld_scp/
    background_image: "/assets/images/user-1-discworld_scp/background.jpg" # Optional
    ---
    ```

#### 3. Create the Timeline Folder
This is where all of your session notes will live.

> [!WARNING]
> Go into the **[`campaigns/`](campaigns)** folder and create a new folder named **`_user-1-discworld_scp/`**. **The underscore is required.**

Your new campaign is now set up! The site will automatically add a card for it on the homepage.

#### 4. Create the Image Folder
Each campaign should store all its images in a dedicated folder.
* For our example, the path would be `/assets/images/user-1-discworld_scp/`.

> [!NOTE]
> Missing images do not break the site, so put them in as able!

---

## How to Add a Session (Timeline Event) 📝

Each "session" is a simple Markdown file representing an event in your timeline.

1.  **Create a New File**: Go into the **[`campaigns/`](campaigns)** folder, then into the collection folder for your campaign (e.g., **`_user-1-discworld_scp/`**). Create a new Markdown file (`.md`).
    * Example: `the-explosion.md`

2.  **Add the Front Matter**: At the very top of the new file, add the `title` and `date`. The `date` determines the order of events in the timeline.

    ```yml
    ---
    title: "The Explosion"
    date: 2025-10-12
    ---
    ```
    
> [!WARNING]
> Date must be in the form `YYYY-MM-DD`.

3.  **Write Your Content**: Below the `---`, write your session notes using standard Markdown.

Save the file, and it will automatically appear in the correct order on your campaign's timeline page.