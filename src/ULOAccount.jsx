import { useState } from "react";

// #data — student profile info shown in the header table and Profile tab
const profileData = {
  name: "Juan Dela Cruz",
  studentId: "2026123456",
  department: "College of Allied Health and Sciences",
  program: "Bachelor of Science in Nursing",
  avatar: null,
};

// #data — tab labels
const tabs = ["Profile", "Category 1", "Category 2", "Category 3"];

// #nav icons — icon definitions for each sidebar button
const navIcons = [
  {
    id: "dashboard",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "grades",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    id: "enrollment",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: "account",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

// #component — grey box showing the student's initials as an avatar
function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={styles.avatarBox}>
      <span style={styles.avatarInitials}>{initials}</span>
    </div>
  );
}

export default function ULOAccount({ onNavigate }) {
  // #state — tracks active sidebar icon, active tab, and logout modal visibility
  const [activeNav, setActiveNav] = useState("account");
  const [activeTab, setActiveTab] = useState("Profile");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleNav = (id) => {
    if (id === "grades") {
      onNavigate("courses");
    } else if (id === "enrollment") {
      onNavigate("enrollment");
    } else if (id === "account") {
      onNavigate("account");
    } else if (id === "dashboard") {
      onNavigate("dashboard");
    } else {
      setActiveNav(id);
    }
  };

  return (
    <div style={styles.app}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <nav style={styles.nav}>
          {navIcons.map((item) => (
            <button
              key={item.id}
              style={{
                ...styles.navBtn,
                ...(activeNav === item.id ? styles.navBtnActive : {}),
              }}
              onClick={() => handleNav(item.id)}
              title={item.id}
            >
              {item.icon}
            </button>
          ))}
        </nav>

        <div style={styles.sidebarBottom}>
          <button
            style={styles.logoutBtn}
            title="Logout"
            onClick={() => setShowLogoutModal(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>My Account</h1>
          <div style={styles.headerLine} />
        </div>

        <div style={styles.card}>
          {/* Profile Header */}
          <div style={styles.profileHeader}>
            <Avatar name={profileData.name} />
            <table style={styles.infoTable}>
              <tbody>
                {[
                  { label: "Name", value: profileData.name },
                  { label: "Student ID", value: profileData.studentId },
                  { label: "Department", value: profileData.department },
                  { label: "Program", value: profileData.program },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={styles.infoLabel}>{row.label}</td>
                    <td style={styles.infoValue}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tabs */}
          <div style={styles.tabBar}>
            {tabs.map((tab) => (
              <button
                key={tab}
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === tab ? styles.tabBtnActive : {}),
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={styles.tabContent}>
            {activeTab === "Profile" && (
              <div style={styles.profileContent}>
                <div style={styles.profileSection}>
                  <h3 style={styles.sectionTitle}>Personal Information</h3>
                  <div style={styles.divider} />
                  <div style={styles.infoGrid}>
                    {[
                      { label: "Full Name", value: profileData.name },
                      { label: "Student ID", value: profileData.studentId },
                      { label: "Department", value: profileData.department },
                      { label: "Program", value: profileData.program },
                      { label: "Year Level", value: "4th Year" },
                      { label: "Status", value: "Regular" },
                    ].map((item, i) => (
                      <div key={i} style={styles.infoItem}>
                        <span style={styles.infoItemLabel}>{item.label}</span>
                        <span style={styles.infoItemValue}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab !== "Profile" && (
              <div style={styles.emptyState}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#cbd5e0" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="9" x2="15" y2="9" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="12" y2="17" />
                </svg>
                <p style={styles.emptyText}>No content available for {activeTab}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={() => onNavigate("login")}
        onCancel={() => setShowLogoutModal(false)}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f8fc; }
        button { cursor: pointer; border: none; background: none; }
        button:hover { opacity: 0.8; }
      `}</style>
    </div>
  );
}

// #styles — all inline style objects used by the components above
const styles = {
  app:            { display: "flex", width: "100%", minHeight: "100vh", fontFamily: "'Nunito', sans-serif", background: "#f7f8fc" },
  sidebar:        { width: "64px", background: "#1a2056", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "16px", paddingBottom: "16px", position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 100 },
  nav:            { display: "flex", flexDirection: "column", gap: "6px", flex: 1, justifyContent: "center" },
  navBtn:         { width: "44px", height: "44px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8892c8", transition: "all 0.18s" },
  navBtnActive:   { background: "#f5c842", color: "#1a2056" },
  sidebarBottom:  { marginTop: "auto" },
  logoutBtn:      { width: "44px", height: "44px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#e53e3e", background: "rgba(229,62,62,0.12)" },
  main:           { marginLeft: "64px", flex: 1, padding: "28px 32px", minHeight: "100vh" },
  header:         { display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" },
  pageTitle:      { fontSize: "26px", fontWeight: "800", color: "#1a2056", whiteSpace: "nowrap" },
  headerLine:     { flex: 1, height: "1.5px", background: "#e2e8f0", borderRadius: "2px" },
  card:           { background: "#fff", borderRadius: "12px", border: "2px solid #f5c842", padding: "20px", display: "flex", flexDirection: "column", gap: "0px" },
  profileHeader:  { display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "16px" },
  avatarBox:      { width: "90px", height: "100px", minWidth: "90px", background: "#e2e8f0", borderRadius: "8px", border: "1.5px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
  avatarInitials: { fontSize: "28px", fontWeight: "800", color: "#718096" },
  infoTable:      { borderCollapse: "collapse", flex: 1, width: "100%" },
  infoLabel:      { background: "#f5c842", color: "#1a2056", fontWeight: "700", fontSize: "12px", padding: "6px 12px", border: "1px solid #e8d97a", whiteSpace: "nowrap", width: "120px" },
  infoValue:      { background: "#fff", color: "#2d3748", fontWeight: "600", fontSize: "12px", padding: "6px 14px", border: "1px solid #e2e8f0", width: "100%" },
  tabBar:         { display: "flex", gap: "0px", borderBottom: "2px solid #e2e8f0", marginBottom: "0" },
  tabBtn:         { padding: "8px 16px", fontSize: "12px", fontWeight: "700", color: "#718096", background: "none", border: "none", borderBottom: "2px solid transparent", marginBottom: "-2px", borderRadius: "0", transition: "all 0.15s", cursor: "pointer" },
  tabBtnActive:   { color: "#1a2056", borderBottom: "2px solid #f5c842", background: "#fffdf0" },
  tabContent:     { border: "1.5px solid #e2e8f0", borderTop: "none", borderRadius: "0 0 8px 8px", minHeight: "260px", padding: "20px" },
  profileContent: { display: "flex", flexDirection: "column", gap: "16px" },
  profileSection: { display: "flex", flexDirection: "column", gap: "10px" },
  sectionTitle:   { fontSize: "14px", fontWeight: "800", color: "#f5c842" },
  divider:        { height: "1.5px", background: "#e2e8f0", borderRadius: "2px" },
  infoGrid:       { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" },
  infoItem:       { display: "flex", flexDirection: "column", gap: "2px" },
  infoItemLabel:  { fontSize: "11px", fontWeight: "700", color: "#a0aec0", textTransform: "uppercase", letterSpacing: "0.5px" },
  infoItemValue:  { fontSize: "13px", fontWeight: "600", color: "#2d3748" },
  emptyState:     { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 0", gap: "10px" },
  emptyText:      { color: "#a0aec0", fontSize: "14px", fontWeight: "600" },
};

// #logout modal — confirmation dialog shown before logging out
function LogoutModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return (
    <div
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.45)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onCancel}
    >
      <div
        style={{ background: "#fff", borderRadius: "14px", border: "2px solid #f5c842", width: "320px", overflow: "hidden", animation: "modalPopIn 0.18s ease", fontFamily: "'Nunito', sans-serif" }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ background: "#f5c842", padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2056" strokeWidth="2.5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "800", color: "#1a2056" }}>Confirm Logout</span>
        </div>
        <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ fontSize: "13px", color: "#4a5568", fontWeight: "600", textAlign: "center" }}>
            Are you sure you want to log out?
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <button
              style={{ padding: "8px 28px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", border: "1.5px solid #e2e8f0", background: "#f7f8fc", color: "#4a5568", cursor: "pointer" }}
              onClick={onCancel}
            >Cancel</button>
            <button
              style={{ padding: "8px 28px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", border: "none", background: "#e53e3e", color: "#fff", cursor: "pointer" }}
              onClick={onConfirm}
            >Log out</button>
          </div>
        </div>
      </div>
      <style>{`@keyframes modalPopIn { from { transform: scale(0.92); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
    </div>
  );
}