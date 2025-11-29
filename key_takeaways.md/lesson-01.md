# Buổi học số 1: Getting Started with Playwright

## 1. Giới thiệu khóa học
- Học Playwright từ con số 0.
- Có slide, record và bài tập đầy đủ.
- Mentor: Senior Quality Engineer, nhiều kinh nghiệm.
- Lộ trình lớp học
  - Khởi động - Chậm mà chắc - Vượt chướng ngại vật - Tăng tốc - Về đích

---

## 2. Tinh thần học tập
### Học chủ động
- Tự tìm hiểu trước khi hỏi.
- Chủ động trao đổi khi có khó khăn.
- Chủ động xem lại bài/record.

### Học chăm chỉ
- Làm bài tập đầy đủ.
- Luyện tập thường xuyên.

### Học thông minh
- Tự hệ thống lại kiến thức.
- Tự đặt câu hỏi và giải thích cho bản thân.

---

## 3. Công cụ học tập

### Google Classroom
- Link lớp học : https://classroom.google.com/c/NzgzMTM1OTc2MTEw?cjc=qbr5bvbt
- Xem lại slide, bài giảng, video record.
- Nộp bài tập trên Classroom.

### Zoom
- Ứng dụng học trực tuyến.
- Mở mic/cam khi cần trao đổi.
- Dùng chat & reactions để tương tác.

---

## 4. Tài liệu học
- Slide, Record, Bài tập -> truy cập trọn đời.
- Tài liệu nội bộ -> không chia sẻ ra ngoài.

---

## 5. Playwright Overview
https://playwright.dev/

### Playwright là gì?
- Framework automation test mới.
- Do Microsoft phát triển.
- Tiền thân: Puppeteer.

### Playwright hỗ trợ:
- Cross-browser: Chromium, Firefox, WebKit.
- Cross-platform: Windows, MacOS, Linux.
- Auto-wait (tự chờ UI).
- Web-first assertions.
- Tracing, debugging.
- Code generation.

### Tại sao học Playwright?
- Cú pháp đơn giản, hiện đại.
- Dễ học hơn Selenium.
- Hỗ trợ nhiều công cụ tích hợp.
- Dù công ty dùng tool khác -> hiểu bản chất vẫn áp dụng được.

---

## 6. Cài đặt công cụ

### NVM & NodeJS
- NVM = Node Version Manager.
- Quản lý nhiều phiên bản NodeJS.
- Cài đặt:
  - Windows: NVM for Windows.
  - Mac: `brew install nvm`
- Cài đặt NVM (Node Version Manager)
Engine
  - On Mac: brew install nvm
  - On Window: https://github.com/coreybutler/nvmwindows/releases
- Lệnh:
nvm install <version>
nvm use <version>

### Fix lỗi phổ biến:
- `nvm command not found`
- Lỗi `node-gyp`
- https://minhphong306.wordpress.com/2023/01/19/huong-dan-fix-loi-cai-package-node-gyp-tren-window/

---

## 7. Cài đặt Playwright
- Tạo thư mục dự án: pw-course
- Khởi tạo Playwright:
`npm init playwright@latest`
- Mở `example.spec.ts` -> run test bằng VSCode extension. (click biểu tượng play bên cạnh các dòng code)

---

## 8. Git & GitHub

### Cài đặt Git
- Tải Git tại: https://git-scm.com/downloads
- Kiểm tra: `git --version`

### Cấu hình git từ chưa biết gì
- Config username: `git config --global user.name “<name>”`
- Config email: `git config --global user.email <email>”`
- Config branch default: `git config --global init.defaultBranch main`

### Cấu hình Git
```js
git config --global user.name "<Tên>"
git config --global user.email "<Email>"
git config --global init.defaultBranch main
```
### Tạo tài khoản GitHub
- Tạo profile chuyên nghiệp.
- Không dùng nickname thiếu chuyên nghiệp, trẻ con.

---

## 9. SSH Key (kết nối GitHub)

### SSH key gồm:
- id_rsa : private key – tuyệt đối không chia sẻ.
- id_rsa.pub : public key – dùng để add vào GitHub.

### Tạo SSH key:
`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

### Thêm vào GitHub:
- Lấy public key: `cat ~/.ssh/id_rsa.pub`
- Add vào GitHub SSH settings.

---

## 10. Push code lên GitHub

### Tạo repo
- GitHub -> New Repository -> Public.

### Liên kết repo local với remote
```js
git init
git remote add origin <ssh_link>
git add .
git commit -m "init project"
git push origin main
```
### Mời mentor chấm bài:
- Settings of repository -> Access -> Invite Collaborators.

---