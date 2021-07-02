import { useEffect, useState } from 'react';

export function usePermission(permissionName: PermissionName) {
    async function getPermissionState() {
        return await navigator.permissions.query({ name: permissionName });
    }

    const [permissionState, setPermissionState] = useState<PermissionState>('prompt');

    useEffect(() => {
        const fetchPermissionState = async () => {
            const newPermissionState = await getPermissionState();

            setPermissionState(newPermissionState.state);
        };

        fetchPermissionState();
    }, []);

    return {
        permissionState,
        getPermissionState,
    };
}
