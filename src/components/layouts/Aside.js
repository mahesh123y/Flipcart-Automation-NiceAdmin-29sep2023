import React from "react";
import Link from "next/link";

export default function Aside() {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " href="/admin/dashboard">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Purchasing</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link href="/admin/purchaseStart">
                  <i className="bi bi-circle" />
                  <span>Start</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/purchaseInProgress">
                  <i className="bi bi-circle" />
                  <span>InProgress</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/purchaseComplete">
                  <i className="bi bi-circle" />
                  <span>Completed</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
