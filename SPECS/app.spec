%define name app
%define version 0.0.1
%define release 1
%define buildroot %(mktemp -ud %{_tmppath}/%{name}-%{version}-%{release}-XXXXXX)

Name: %{name}
Version: %{version}
Release: %{release}
Summary: app

Group: Installation Script
License: MIT
Source: %{name}.tar.gz
BuildRoot: %{buildroot}
Requires: nodejs
BuildRequires: nodejs
AutoReqProv: no

%description


%prep
%setup -q -c -n %{name}

%build
npm prune --production
npm rebuild

%pre
getent group app >/dev/null || groupadd -r app
getent passwd app >/dev/null || useradd -r -g app -G app -d / -s /sbin/nologin -c "app" app

%install
mkdir -p %{buildroot}/usr/lib/app
cp -r ./ %{buildroot}/usr/lib/app
mkdir -p %{buildroot}/var/log/app

%post
systemctl enable /usr/lib/app/app.service

%clean
rm -rf %{buildroot}

%files
%defattr(644, app, app, 755)
/usr/lib/app
/var/log/app
