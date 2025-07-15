import subprocess
import re

def get_profiles():
    output = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles'], stderr=subprocess.DEVNULL).decode(errors="ignore")
    return re.findall(r"All User Profile\s*:\s*(.+)", output)

def get_password(profile):
    try:
        output = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', profile, 'key=clear'], stderr=subprocess.DEVNULL).decode(errors="ignore")
        password = re.search(r"Key Content\s*:\s*(.+)", output)
        return password.group(1) if password else ""
    except:
        return ""

def main():
    profiles = get_profiles()
    print("{:<30} {}".format("Wi-Fi Name", "Password"))
    print("-" * 50)
    for profile in profiles:
        password = get_password(profile.strip())
        print("{:<30} {}".format(profile, password))

if __name__ == "__main__":
    main()
