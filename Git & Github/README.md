# Git & Github Notes

## What is Git?
- **Git** is a tool that tracks changes to files over time, allowing you to revert to specific versions if needed.

- **Git** is a distributed system, meaning each developer has a complete copy of the repository, including its entire history.

## Basic Git Commands
- **`pwd`**: Displays the current directory.
- **`ls`**: Lists the contents of the directory.
- **`cd`**: Changes directories. Use `cd ..` to move up one level.
- **`clear`**: Clears the terminal screen.
- **`mkdir`**: Creates a new directory.
- **`touch`**: Creates a new file.
- **`rm`**: Deletes a file.

## Git Workflow
1. **Working Directory**: Your current local files.
2. **Staging Area (Index)**: Where you prepare files before committing them.
3. **Local Repository**: Where your commits are stored locally.

## Initial Setup
- Set your Git username and email globally:
```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
```
- View your Git configuration:
```bash
git config --list
```

## Starting a Git Repository
- Initialize Git in a directory:
```bash
git init
```
- Check Git status:
```bash
git status
```
- Add files to the staging area:
```bash
git add <file-name>
```
- Or add all files:
```bash
git add .
```
- Commit changes with a message:
```bash
git commit -m "Your commit message"
```
- View commit history:
```bash
git log
```

## Ignoring Files
- Create a **.gitignore** file to specify files/folders that Git should ignore.

## Branching
- Create a new branch:
```bash
git branch <branch-name>
```
- Switch to a branch:
```bash
git switch <branch-name>
```
- Merge a branch into the current branch:
```bash
git merge <branch-name>
```

## Stashing Changes
- Stash uncommitted changes:
  - **Explanation**: `stash` temporarily saves your uncommitted changes, allowing you to switch branches or perform other tasks without losing your work. You can apply these changes later using `git stash pop`.
```bash
git stash
```
- Apply stashed changes:
```bash
git stash pop
```
- View stash list:
```bash
git stash list
```

## Navigating Commit History
- Checkout a specific commit:
  - **Explanation**: `checkout` allows you to move to a specific commit or branch. If you checkout a past commit, you'll enter a `"detached HEAD"` state, meaning you're not on any branch. This is useful for viewing or testing previous versions without making changes to the branch.
```bash
git checkout <commit-hash>
```
- Reset the branch to a previous commit:
  - **Explanation**: `reset` moves the current branch to a specific commit. This can be done in different ways:
    - Soft reset (--soft): Moves the branch pointer to the specified commit but keeps changes in the working directory and staging area.
    - Mixed reset (default): Moves the branch pointer and keeps changes in the working directory, but unstages them.
    - Hard reset (--hard): Resets the branch pointer and the working directory to match the specified commit, discarding all changes.
```bash
git reset <commit-hash>
```
- Revert to a previous commit:
  - **Explanation**: `revert` creates a new commit that undoes the changes introduced by a previous commit. Unlike reset, which changes history, revert preserves the history and is safer to use when working with others.
```bash
git revert <commit-hash>
```
- View differences between commits:
```bash
git diff <commit-hash>..<commit-hash>
```

## Cloning a GitHub Repository
1. Via GitHub Desktop: Use the "Set up in Desktop" button.
2. Via Command Line:
- Add the remote repository:
```bash
git remote add origin <GitHub-repo-URL>
```
- Push changes to the remote repository:
```bash
git push -u origin master
```

## Pulling and Fetching
- Pull changes from the remote repository and merge them with local changes:
```bash
git pull origin master
```
- Fetch changes from the remote repository without merging:
```bash
git fetch origin
```