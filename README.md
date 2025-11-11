# 📝 To-Do List App

Ứng dụng quản lý công việc (To-Do List) được xây dựng bằng React với giao diện đẹp mắt và đầy đủ tính năng.

## ✨ Tính năng

- ✅ **Thêm công việc mới** - Nhập và lưu trữ các công việc cần làm
- ✏️ **Chỉnh sửa công việc** - Double-click vào công việc để chỉnh sửa
- ✔️ **Đánh dấu hoàn thành** - Đánh dấu công việc đã hoàn thành bằng checkbox
- 🗑️ **Xóa công việc** - Xóa từng công việc hoặc xóa tất cả công việc đã hoàn thành
- 🔍 **Lọc công việc** - Xem tất cả, chỉ công việc đang làm, hoặc đã hoàn thành
- 📊 **Thống kê** - Hiển thị số lượng công việc tổng, đang làm, và đã hoàn thành
- 💾 **Lưu trữ tự động** - Dữ liệu được lưu vào Local Storage, không mất khi tải lại trang
- 🎨 **Giao diện đẹp mắt** - Thiết kế hiện đại với gradient và animations

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy ứng dụng ở chế độ development:
```bash
npm run dev
```

3. Mở trình duyệt và truy cập:
```
http://localhost:5173
```

### Build cho production

```bash
npm run build
```

## 📂 Cấu trúc dự án

```
To-do-list-App/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx       # Form thêm công việc mới
│   │   ├── TodoForm.css
│   │   ├── TodoItem.jsx       # Hiển thị từng công việc
│   │   ├── TodoItem.css
│   │   ├── TodoList.jsx       # Danh sách công việc
│   │   ├── TodoList.css
│   │   ├── Filter.jsx         # Bộ lọc và thống kê
│   │   └── Filter.css
│   ├── App.jsx                # Component chính
│   ├── App.css
│   ├── main.jsx               # Entry point
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Công nghệ sử dụng

- **React 18** - Thư viện JavaScript để xây dựng giao diện người dùng
- **Vite** - Build tool nhanh cho React
- **CSS3** - Styling với Flexbox, Animations, và Gradients
- **Local Storage API** - Lưu trữ dữ liệu trên trình duyệt

## 📖 Hướng dẫn sử dụng

1. **Thêm công việc mới**: Nhập tên công việc vào ô input và nhấn nút "➕ Thêm" hoặc Enter
2. **Đánh dấu hoàn thành**: Click vào checkbox bên trái công việc
3. **Chỉnh sửa công việc**: Double-click vào text công việc (chỉ với công việc chưa hoàn thành)
4. **Xóa công việc**: Hover vào công việc và click nút 🗑️
5. **Lọc công việc**: Sử dụng các nút lọc: "Tất cả", "Đang làm", "Hoàn thành"
6. **Xóa công việc đã hoàn thành**: Click nút "🗑️ Xóa X công việc đã hoàn thành" ở cuối danh sách

## 🎯 Tính năng nâng cao

- **Persistent Storage**: Dữ liệu được tự động lưu vào Local Storage
- **Edit Mode**: Double-click để chỉnh sửa, nhấn Enter để lưu, Esc để hủy
- **Keyboard Support**: Hỗ trợ Enter và Escape khi chỉnh sửa
- **Responsive Design**: Giao diện tương thích với mọi kích thước màn hình
- **Smooth Animations**: Các hiệu ứng chuyển động mượt mà

## 📝 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👨‍💻 Phát triển bởi

Dự án được xây dựng dựa trên tài liệu React Development Exercises.