import os
import shutil
import subprocess

def get_all_files_and_folders(root_dir):
    all_items = []
    for root, dirs, files in os.walk(root_dir):
        for name in dirs:
            all_items.append(os.path.join(root, name))
        for name in files:
            all_items.append(os.path.join(root, name))
    return set(all_items)

def copy_new_items(origin, destination):
    new_items = []
    for root, dirs, files in os.walk(origin):
        for name in dirs + files:
            origin_path = os.path.join(root, name)
            relative_path = os.path.relpath(origin_path, origin)
            dest_path = os.path.join(destination, relative_path)

            if not os.path.exists(dest_path):
                if os.path.isdir(origin_path):
                    shutil.copytree(origin_path, dest_path)
                else:
                    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
                    shutil.copy2(origin_path, dest_path)
                new_items.append(dest_path)
                print(f"Copied {origin_path} to {dest_path}")
    return new_items

def run_git_commands(repo_path, new_items):
    os.chdir(repo_path)
    subprocess.run(["git", "add", "."])

    for item in new_items:
        if os.path.isdir(item):
            folder_name = os.path.basename(item)
            subprocess.run(["git", "commit", "-m", f"new folder {folder_name} added"])
        else:
            file_name = os.path.basename(item)
            subprocess.run(["git", "commit", "-m", f"new file {file_name} added"])

    subprocess.run(["git", "push"])
    subprocess.run(["git", "pull"])

if __name__ == "__main__":
    origin_folder = r'C:\Users\USER\Desktop\Udemy-JS'
    git_repo_folder = r'D:\Git-Learning-Repos\NodeJS-The-Complete-Learning-MVC-REST-APIs-GraphQL-Deno-'

    new_items = copy_new_items(origin_folder, git_repo_folder)

    if new_items:
        run_git_commands(git_repo_folder, new_items)
    else:
        print("No new items to copy.")
